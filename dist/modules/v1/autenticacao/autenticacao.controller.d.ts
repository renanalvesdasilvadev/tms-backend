import { AutenticacaoService } from './autenticacao.service';
import { CreateAutenticacaoDto } from './dto/create-autenticacao.dto';
import { UpdateAutenticacaoDto } from './dto/update-autenticacao.dto';
export declare class AutenticacaoController {
    private readonly autenticacaoService;
    constructor(autenticacaoService: AutenticacaoService);
    create(createAutenticacaoDto: CreateAutenticacaoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAutenticacaoDto: UpdateAutenticacaoDto): string;
    remove(id: string): string;
}
