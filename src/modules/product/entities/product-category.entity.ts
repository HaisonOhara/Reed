import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products_category' })
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
