import { Controller, Delete, Param } from '@nestjs/common';
import { ComodoService } from './comodo.service';
@Controller('comodos')
export class ComodoController {
  constructor(private readonly comodoService: ComodoService) {}
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.comodoService.remove(id);
  }
}