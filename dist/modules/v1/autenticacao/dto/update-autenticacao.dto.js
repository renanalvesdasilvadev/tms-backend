"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutenticacaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_autenticacao_dto_1 = require("./create-autenticacao.dto");
class UpdateAutenticacaoDto extends mapped_types_1.PartialType(create_autenticacao_dto_1.CreateAutenticacaoDto) {
}
exports.UpdateAutenticacaoDto = UpdateAutenticacaoDto;
//# sourceMappingURL=update-autenticacao.dto.js.map