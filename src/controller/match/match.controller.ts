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
        response.status(HttpStatus.CREATED).json(match);
      } catch (error) {
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error. Inténtalo de nuevo.' });
      } finally {
      }
    }
  
    @Get()
    async getAll(@Res() response) {
      try {
        const matches = await this.matchService.getAll();
        response.status(HttpStatus.OK).json(matches);
      } catch (error) {
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error in getAll' });
      } finally {
      }
    }
  
    @Delete(':id')
    async delete(@Res() response, @Param('id') idMatch: number) {
      try {
        const res = await this.matchService.delete(idMatch);
        response.status(HttpStatus.OK).json(res);
      } catch (error) {
        response.status(HttpStatus.FORBIDDEN).json({ message: 'Error in delete' });
      } finally {
      }
    }    
    



}
