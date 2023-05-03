import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductCategory } from './product-category.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stockQuantity: number;

  @OneToOne((type) => ProductCategory)
  @JoinColumn()
  product_category: ProductCategory;

  @Column()
  gender: string; //TODO: UTILIZAR ENUM

  @Column()
  barcode: string; //TODO:OBSERVAR ESSE BARCODE
}
