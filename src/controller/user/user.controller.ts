import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { UserDto } from 'src/dto/user-dto/user-dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() userDto: UserDto) {
        this.userService.create(userDto).then(user => { 
            response.status(HttpStatus.CREATED); 
        }).catch(err => { 
            response.status(HttpStatus.FORBIDDEN).json({message: 'error in create'}); 
        }).finally(() => {});
    };

    @Get()
    getAll(@Res() response) {
       this.userService.getAll().then(users => {
            response.status(HttpStatus.OK).json(users);
        }).catch(err => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error in getAll'}); 
        }).finally(() => {});
    }
    

    @Put(':id')
    update(@Body() userDto: UserDto, @Res() response, @Param(':id') idUser) {
        
       this.userService.update(idUser, userDto).then(user => {
        response.status(HttpStatus.OK).json(user);
    }).catch(err => {
        response.status(HttpStatus.FORBIDDEN).json({message: 'error in update'}); 
    }).finally(() => {});
    }

    @Delete(':id')
    delete(@Res() response, @Param(':id') idUser: number) {
        this.userService.delete(idUser).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(err => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error in delete'}); 
        }).finally(() => {});
    }
}
