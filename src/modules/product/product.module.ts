import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './product.service';
import { Product } from './entities/product.entity';
import { ProductsController } from './product.controller';
import { ProductCategory } from './entities/product-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductModule {}
