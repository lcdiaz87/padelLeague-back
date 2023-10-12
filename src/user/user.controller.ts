import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto/create-user-dto';

@Controller('user')
export class UserController {
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return 'user created';
    }
    @Get()
    getAll(){
        return 'get all users'; 
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto) {
        return 'user updated';
    }

    @Delete(':id')
    delete(){
        return 'user deleted';
    }
}
