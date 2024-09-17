import { Module } from '@nestjs/common';
import { ComodoService } from './comodo.service';
import { ImovelController } from './imovel.controller';

@Module({
  controllers: [ImovelController],
  providers: [ComodoService],
})
export class ItemsModule {}
