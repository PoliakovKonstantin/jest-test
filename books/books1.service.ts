import { Injectable } from "@nestjs/common";
import {BooksSchema,BooksService,BooksDocument} from "./books.service"


@Injectable()
export class booksService {
    BooksService1: any;
    constructor() {
        this.BooksService1=BooksService
    }
    async getBook(id) {
        var a=1
        const BooksService=new this.BooksService1()
        await BooksService.Book.findById(id, function(err: any, doc: any){
             
            if(err) return console.log(err);
             
            a=doc;
        }
        )
        return a
    }
    async createBook(title,description,authors,favorite,fileCover,fileName){
        const BooksService=new this.BooksService1()
        let a
       
        await BooksService.Book.create({title,description,authors,favorite,fileCover,fileName},(err: any,doc: any)=>{
            if(err)  console.error(err)
            a=doc
            console.log(a)
        })
        return a
    }

    async updateBook(id,title,description,authors,favorite,fileCover,fileName) {
        const BooksService=new this.BooksService1()
        let a
        await BooksService.Book.findByIdAndUpdate(id,{title,description,authors,favorite,fileCover,fileName},(err:any,doc:any)=>{
     
            if(err) return console.log(err);
            a=doc
        }
        )
        return a
    }

    async deleteBook(id) {
        const BooksService=new this.BooksService1()
        var a
        await BooksService.Book.findByIdAndDelete(id, function(err: any, doc: any){
             
            if(err) return console.log(err);
             
            a='ok'
        });
        console.log(a)
        return a
    }
}