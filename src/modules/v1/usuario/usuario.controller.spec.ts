import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { IUsuarioService } from './interfaces/usuario.service.interface';

describe('UsuarioController', () => {
  let app: INestApplication;
  let controller: UsuarioController;
  let serviceMock: IUsuarioService;

  beforeEach(async () => {

    serviceMock = {
      create: jest.fn(),

      findAll: jest.fn(),

      findOne: jest.fn(),

      update: jest.fn(),

      remove: jest.fn()
    };
    

    const usuarioServiceProvider = {
        useValue: serviceMock,
        provide: "UsuarioService"
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [usuarioServiceProvider],
    })
    .compile();

    app = module.createNestApplication();

    controller = module.get<UsuarioController>(UsuarioController);
    await app.init();
  });

  describe('POST - v1/usuario', () => {
    it('should be status code 200', () => {      

      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "Nome de teste", email: "email@teste.com", senha: "123456"})
        .expect(201);
        
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "", email: "email@teste.com", senha: "123456"})
        .expect(400);
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "Nome de teste", email: "emai", senha: "123456"})
        .expect(400);
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "Nome de teste", email: "email@teste.com", senha: "12"})
        .expect(400);
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "Nome de teste", email: "email@teste.com", senha: ""})
        .expect(400);
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .post('/v1/usuario')
        .send({nome: "Nome de teste", email: "email@teste.com", senha: "55555555555555"})
        .expect(400);
    });
  });

  describe('GET - v1/usuario', () => {
    it('should be status code 200', () => {
      return request(app.getHttpServer())
        .get('/v1/usuario')
        .expect(200)
    });

    it('should be status code 200', () => {
      return request(app.getHttpServer())
        .get('/v1/usuario/1')
        .expect(200)
    });
  });

  describe('PUT - v1/usuario/1', () => {
    it('should be status code 200', () => {
      return request(app.getHttpServer())
        .put('/v1/usuario/1')
        .send({senhaAtual: "123456", senhaNova: "123456", senhaNovaConfirmacao: "123456"})
        .expect(200)
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .put('/v1/usuario/1')
        .send({senhaAtual: "1234", senhaNova: "123456", senhaNovaConfirmacao: "1234567"})
        .expect(400)
    });
    it('should be status code 400', () => {
      return request(app.getHttpServer())
        .put('/v1/usuario/1')
        .send({senhaAtual: "123456", senhaNova: "12345678", senhaNovaConfirmacao: "1234567"})
        .expect(400)
    });
  });

  describe('PUT - v1/usuario/disable/1', () => {
    it('should be status code 200', () => {
      return request(app.getHttpServer())
        .put('/v1/usuario/disable/1')
        .expect(200)
    });
  });

  describe('PUT - v1/usuario/enable/1', () => {
    it('should be status code 200', () => {
      return request(app.getHttpServer())
        .put('/v1/usuario/enable/1')
        .expect(200)
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
