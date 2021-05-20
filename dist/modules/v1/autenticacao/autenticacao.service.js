"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacaoService = void 0;
const common_1 = require("@nestjs/common");
let AutenticacaoService = class AutenticacaoService {
    create(createAutenticacaoDto) {
        return 'This action adds a new autenticacao';
    }
    findAll() {
        return `This action returns all autenticacao`;
    }
    findOne(id) {
        return `This action returns a #${id} autenticacao`;
    }
    update(id, updateAutenticacaoDto) {
        return `This action updates a #${id} autenticacao`;
    }
    remove(id) {
        return `This action removes a #${id} autenticacao`;
    }
};
AutenticacaoService = __decorate([
    common_1.Injectable()
], AutenticacaoService);
exports.AutenticacaoService = AutenticacaoService;
//# sourceMappingURL=autenticacao.service.js.map