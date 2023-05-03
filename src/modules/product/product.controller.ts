import { Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productservice: ProductsService) {}

  @Get('')
  async getAll(): Promise<Product[]> {
    return this.productservice.findAll();
  }

  @Get(':id/product')
  async getOneProduct(@Param('id') id: number): Promise<Product> {
    return this.productservice.findOne(id);
  }

  // TODO: IMPLEMENTAR POST()
  @Post(':id/makeSale')
  async makeSale(): Promise<Product[]> {
    return this.productservice.findAll();
  }
}
