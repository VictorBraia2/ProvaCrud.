import { Test, TestingModule } from '@nestjs/testing';
import { ImovelController} from './imovel.controller';
import { ComodoService } from './comodo.service';

describe('ItemsController', () => {
  let controller: ImovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImovelController],
      providers: [ComodoService],
    }).compile();

    controller = module.get<ImovelController>(ImovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
