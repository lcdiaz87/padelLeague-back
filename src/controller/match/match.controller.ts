import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MatchDto } from 'src/dto/match-dto/match-dto';

@Controller('match')
export class MatchController {
    
    @Post()
    create(@Body() matchDto: MatchDto){
        return 'This action adds a new match';
    }

    @Get()
    getAll(){
        return 'get all matches';
    }

    @Put(':id')
    update(@Body() matchDto: MatchDto){
        return 'update match';
    }

    @Delete(':id')
    delete(){
        return 'delete match';
    }}
