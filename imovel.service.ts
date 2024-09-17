import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imovel } from './imovel.entity';
import { Comodo } from '../comodos/comodo.entity';
@Injectable()
export class ImovelService {
  constructor(
    @InjectRepository(Imovel)
    private imovelRepository: Repository<Imovel>,
    @InjectRepository(Comodo)
    private comodoRepository: Repository<Comodo>,
  ) {}

  async create(imovelData: Imovel): Promise<Imovel> {
    const imovel = this.imovelRepository.create(imovelData);
    return this.imovelRepository.save(imovel);
  }

  async findAll(): Promise<Imovel[]> {
    return this.imovelRepository.find({ relations: ['comodos'] });
  }
 
  async findOne(id: number): Promise<Imovel> {
    return this.imovelRepository.findOne({ where: { id }, relations: ['comodos'] });
  }

  async update(id: number, imovelData: Imovel): Promise<Imovel> {
    await this.imovelRepository.update(id, imovelData);
    return this.imovelRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.imovelRepository.delete(id);
  }
 
  async addComodo(imovelId: number, comodoData: Comodo): Promise<Comodo> {
    const imovel = await this.imovelRepository.findOne({ where: { id: imovelId }, relations: ['comodos'] });
    const comodo = this.comodoRepository.create(comodoData);
    comodo.imovel = imovel;
    return this.comodoRepository.save(comodo);
  }
}