import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match-dto/create-match-dto';

@Controller('match')
export class MatchController {
    @Post()
    create(@Body() createMatchDto: CreateMatchDto){
        return 'This action adds a new match';
    }

    @Get()
    getAll(){
        return 'get all matches';
    }

    @Put(':id')
    update(@Body() updateMatchDto: CreateMatchDto){
        return 'update match';
    }

    @Delete(':id')
    delete(){
        return 'delete match';
    }
}
