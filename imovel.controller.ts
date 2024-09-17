import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { Imovel } from './imovel.entity';
import { Comodo } from '../entities/comodo.entity';

@Controller('imoveis')
export class ImovelController {
  constructor(private readonly imovelService: ImovelService) {}
  @Get()
  findAll(): Promise<Imovel[]> {
    return this.imovelService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Imovel> {
    return this.imovelService.findOne(id);
  }
  @Post()
  create(@Body() imovelData: Imovel): Promise<Imovel> {
    return this.imovelService.create(imovelData);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() imovelData: Imovel): Promise<Imovel> {
    return this.imovelService.update(id, imovelData);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.imovelService.remove(id);
  }
  @Post(':id/comodos')
  addComodo(@Param('id') imovelId: number, @Body() comodoData: Comodo): Promise<Comodo> {
    return this.imovelService.addComodo(imovelId, comodoData);
  }
}