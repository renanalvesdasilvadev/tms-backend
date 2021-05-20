import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";

export interface IUsuarioService {
    create(createUsuarioDto: CreateUsuarioDto)

    findAll()

    findOne(id: number)

    update(id: number, updateUsuarioDto: UpdateUsuarioDto)

    remove(id: number)
}