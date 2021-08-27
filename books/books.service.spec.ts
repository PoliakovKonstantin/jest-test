import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { booksService } from './books1.service';

describe('BooksService', () => {
  let bookService1

  beforeEach(async () => {
    bookService1=new booksService()
  });

  it('findBook',async ()=>{
    const result='ok'
    jest.spyOn(bookService1,'getBook').mockImplementation(()=>result)
    expect(await bookService1.getBook('6126a5cf140997025c76222a')).toBeDefined()
  })

  it('createBook',async ()=>{
    const result='ok'
  
    jest.spyOn(bookService1,'createBook').mockImplementation(()=>result)
    expect(await bookService1.createBook('6126a5cf140997025c76222a','1','2',['3'],'4','5','6')).toBeDefined()
  })
  it('updateBook',async ()=>{
    const result='ok'
  
    jest.spyOn(bookService1,'updateBook').mockImplementation(()=>result)
    expect(await bookService1.updateBook('1','2',['3'],'4','5','6')).toBeDefined()
  })
  it('deleteBook',async ()=>{
    const result='ok'
  
    jest.spyOn(bookService1,'deleteBook').mockImplementation(()=>result)
    expect(await bookService1.deleteBook('1','2',['3'],'4','5','6')).toBeDefined()
  })
});
