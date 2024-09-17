import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comodo } from './comodo.entity';
@Injectable()
export class ComodoService {
  constructor(
    @InjectRepository(Comodo)
    private comodoRepository: Repository<Comodo>,
  ) {}
  async remove(id: number): Promise<void> {
    await this.comodoRepository.delete(id);
  }
}