import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Imovel } from '../imoveis/imovel.entity';
@Entity()
export class Comodo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @ManyToOne(() => Imovel, (imovel) => imovel.comodos)
  imovel: Imovel;
}