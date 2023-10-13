import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { MatchDto } from 'src/dto/match-dto/match-dto';
import { MatchService } from 'src/services/match/match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {}

    @Post()
    async create(@Body() matchDto: MatchDto, @Res() response) {
      try {
        const match = await this.matchService.create(matchDto);
        console.log(match);
        response.status(HttpStatus.CREATED).json(match);
      } catch (error) {
        console.log(error);
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error. Intentale de nuevo.' });
      } finally {
        console.log('finally');
      }
    }
  
    @Get()
    async getAll(@Res() response) {
      try {
        const matches = await this.matchService.getAll();
        console.log(matches);
        response.status(HttpStatus.OK).json(matches);
      } catch (error) {
        console.log(error);
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error in getAll' });
      } finally {
        console.log('finally');
      }
    }
  
    @Delete(':id')
    async delete(@Res() response, @Param('id') idMatch: number) {
      try {
        const res = await this.matchService.delete(idMatch);
        console.log(res);
        response.status(HttpStatus.OK).json(res);
      } catch (error) {
        console.log(error);
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error in delete' });
      } finally {
        console.log('finally');
      }
    }    
    



}
