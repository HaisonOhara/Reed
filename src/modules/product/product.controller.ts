import { Controller, Get, Post } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductsService } from './product.service';

@Controller()
export class ProductsController {
  constructor(private readonly productservice: ProductsService) {}

  //APLICAR /PRODUCT GERAL

  @Get('/product')
  async getAll(): Promise<Product[]> {
    return this.productservice.findAll();
  }
  @Post(':id/makeSale')
  async makeSale(): Promise<Product[]> {
    return this.productservice.findAll();
  }
}
