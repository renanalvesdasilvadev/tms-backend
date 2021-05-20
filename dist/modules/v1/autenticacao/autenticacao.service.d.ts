import { CreateAutenticacaoDto } from './dto/create-autenticacao.dto';
import { UpdateAutenticacaoDto } from './dto/update-autenticacao.dto';
export declare class AutenticacaoService {
    create(createAutenticacaoDto: CreateAutenticacaoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAutenticacaoDto: UpdateAutenticacaoDto): string;
    remove(id: number): string;
}
