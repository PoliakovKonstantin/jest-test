import { Controller,Get,Post,Delete,Put, Req, Res } from '@nestjs/common';
import * as mongoose from 'mongoose'
import * as dotenv from "dotenv"
dotenv.config({ path: 'C:/nest-jest-test/jest-test/connection.env' })
import {BooksSchema,BooksService,BooksDocument} from "./books.service"
import { booksService } from './books1.service';
import { error } from 'console';
mongoose.connect(process.env.connection,{ useNewUrlParser: true })


@Controller()
export class BooksController {
    static getBook() {
        throw new Error('Method not implemented.');
    }
    [x: string]: any;
    Book: any;
    constructor(){
    this.BooksService1=BooksService
    this.booksService=booksService
    }
    @Post('api/books')
    async createBook(@Req() request,@Res() response)    {
        const {title,description,authors,favorite,fileCover,fileName}=request.body 
        const service=new this.booksService()       
        try{
            await service.createBook(title,description,authors,favorite,fileCover,fileName)
            response.send('ok')
            
        }     
        catch(e) {
            console.error(e)
        }
        
    }
    @Get('api/books/:id')
    async getBook(@Req() request,@Res() response) {
        const {id}=request.params
        const service=new this.booksService()
        response.send(await service.getBook(id))
    
    }
    @Put('api/books/:id')
    async updateBook(@Req() request,@Res() response) {
        const {id}=request.params
        const {title,description,authors,favorite,fileCover,fileName}=request.body    
        const service=new this.booksService()        
        response.json(await service.updateBook(id,title,description,authors,favorite,fileCover,fileName))
    }
    
    @Delete('api/books/:id')
    async deleteBook(@Req() request,@Res() response) {
        const {id}=request.params
        const service=new this.booksService() 
        response.send({data:await service.deleteBook(id)})
    }
    
    
}
function deleteBook(id: any):string {
    throw new Error('Function not implemented.');
}
