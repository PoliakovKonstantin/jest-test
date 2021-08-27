import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksModule } from './books.module';
import { booksService } from './books1.service';
import * as request from "supertest"
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;
  let app: INestApplication

  let booksService1={
    getBook: (id)=>{return {
      authors: null,
      _id: '6126a81d9440202c4c4be182',
      title: null,
      description: null,
      favorite: null,
      fileCover: null,
      fileName:null,
      __v: 0
  }},
    updateBook: (id,{a,b,c,d,e,f})=> {return  {
      authors: null,
      _id: '6126a81d9440202c4c4be182',
      title: null,
      description: null,
      favorite: null,
      fileCover: null,
      fileName: null,
      __v: 0
    }},
    createBook: (a,b,c,d,e,f)=> 'ok',
    deleteBook: (id)=> 'ok'
  }
  
  beforeAll(async ()=>{
    const moduleRef = await Test.createTestingModule({
      imports:[BooksModule],
    }).compile();
    app = moduleRef.createNestApplication();    
    await app.init()
  })
 
  it('getBook',()=>{
    const id='6126a81d9440202c4c4be182'
    return request(app.getHttpServer())
    .get('/api/books/'+id)
    .expect(200)
    .expect(booksService1.getBook(id));
  })
  it('createBook',()=>{
     return request(app.getHttpServer())
    .post('/api/books')
    .expect(201)
    .expect(booksService1.createBook(1,2,3,4,5,6));
  })
  it('updateBook',()=>{
    const id='6126a81d9440202c4c4be182'
    return request(app.getHttpServer())
    .put('/api/books/'+id)
    .expect(200)
    .expect(booksService1.updateBook(id,{a:1,b:2,c:3,d:4,e:5,f:6}));
  })
  it('deleteBook',()=>{
    const id='6126a634fcb87750c08833a2'
    return request(app.getHttpServer())
    .delete('/api/books/'+id)
    .expect(200)
    .expect({data:booksService1.deleteBook(id)});
  })
});
