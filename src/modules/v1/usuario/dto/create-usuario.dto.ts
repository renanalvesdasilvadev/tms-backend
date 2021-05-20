import {IsNotEmpty, MaxLength, MinLength, IsEmail} from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    nome: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(6)
    senha: string;
}
