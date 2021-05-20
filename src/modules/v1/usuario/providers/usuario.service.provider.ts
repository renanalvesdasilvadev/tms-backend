import { UsuarioService } from "../usuario.service";

export const usuarioServiceProvider = {
    useClass: UsuarioService,
    provide: "UsuarioService"
};