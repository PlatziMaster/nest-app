import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';

const data = [
  {
    id: 1,
    name: 'Clothes',
    image: `https://placeimg.com/640/480/any?r=${Math.random()}`,
  },
  {
    id: 2,
    name: 'Electronics',
    image: `https://placeimg.com/640/480/any?r=${Math.random()}`,
  },
  {
    id: 3,
    name: 'Furniture',
    image: `https://placeimg.com/640/480/any?r=${Math.random()}`,
  },
  {
    id: 4,
    name: 'Toys',
    image: `https://placeimg.com/640/480/any?r=${Math.random()}`,
  },
  {
    id: 5,
    name: 'Others',
    image: `https://placeimg.com/640/480/any?r=${Math.random()}`,
  },
];

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('tests for getAll', () => {
    it('should return all categories', () => {
      const categories = service.getAll();
      expect(categories[0].id).toStrictEqual(data[0].id);
      expect(categories[1].id).toStrictEqual(data[1].id);
      expect(categories[2].id).toStrictEqual(data[2].id);
    });
  });

  describe('tests for getCategory', () => {
    it('should return get a category', () => {
      const id = 1;
      const category = service.getCategory(id);
      expect(category.id).toBe(id);
    });

    it('should return an error "NotFoundException"', (done) => {
      try {
        const id = 9999;
        service.getCategory(id);
        done();
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        done();
      }
    });
  });
});
