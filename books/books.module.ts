import { Module } from '@nestjs/common';
import { BooksService,BooksSchema } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { booksService } from './books1.service';

@Module({
  //imports: [MongooseModule.forFeature([{ name: BooksService.name, schema: BooksSchema }])],
  providers: [BooksService,booksService],
  controllers: [BooksController],
  //exports: [MongooseModule]
})
export class BooksModule {}