import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/user/entities/user.entity';
import { UsersModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { Product } from './modules/product/entities/product.entity';
import { ProductCategory } from './modules/product/entities/product-category.entity';

@Module({
  imports: [
    UsersModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'reed',
      entities: [User, Product, ProductCategory],
      synchronize: true, // NAO DEVE SER USADO EM PRODUCAO COMO TRUE!!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
