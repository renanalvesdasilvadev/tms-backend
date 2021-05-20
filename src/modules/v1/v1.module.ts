import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [UsuarioModule, AutenticacaoModule]
})
export class V1Module {}
