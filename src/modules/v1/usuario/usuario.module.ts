import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { usuarioServiceProvider } from './providers/usuario.service.provider';

@Module({
  controllers: [UsuarioController],
  providers: [usuarioServiceProvider]
})
export class UsuarioModule {}
