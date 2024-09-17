import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comodo } from '../comodos/comodo.entity';
@Entity()
export class Imovel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  descricao: string;
  @Column({ type: 'date' })
  dataCompra: Date;
  @Column({ type: 'text' })
  endereco: string;
  @OneToMany(() => Comodo, (comodo) => comodo.imovel, { cascade: true })
  comodos: Comodo[];
}