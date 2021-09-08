import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './../services/categories.service';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be call getAll', () => {
    const mock = [
      {
        id: 1,
        name: 'Una',
        image: '',
      },
    ];
    jest.spyOn(service, 'getAll').mockImplementation(() => mock);
    const rta = controller.getAll();
    expect(rta).toBe(mock);
    expect(service.getAll).toBeCalled();
    expect(service.getAll).toHaveBeenCalledTimes(1);
  });
});
