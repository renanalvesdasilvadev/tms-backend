import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('UsuarioController', () => {
  let app: INestApplication;
  let controller: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService],
    }).compile();

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

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
