import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Put, Inject } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { IUsuarioService } from './interfaces/usuario.service.interface';

@Controller('v1/usuario')
export class UsuarioController {
  constructor(
    @Inject("UsuarioService")
    private readonly usuarioService: IUsuarioService
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Put(":id")  
  @UsePipes(new ValidationPipe())
  edit(@Param('id') id: string, @Body() updateDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateDto);
  }

  @Post("disable/:id")  
  disable(@Param('id') id: string) {
    
  }

  @Post("enable/:id")  
  enable(@Param('id') id: string) {
    
  }
  
}
