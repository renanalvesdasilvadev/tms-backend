import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import {IsNotEmpty, MaxLength, MinLength, IsEmail, Equals} from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(6)    
    senhaAtual: string;

    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(6)
    senhaNova: string;

    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(6)
    senhaNovaConfirmacao: string;
}
