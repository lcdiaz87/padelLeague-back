import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MatchDto } from "src/dto/match-dto/match-dto";
import { Match } from "src/entities/match/match.entity";
import { Repository } from "typeorm";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match) private readonly matchRepository: Repository<Match>
  ) {}

  async getAll(): Promise<Match[]> {
    return await this.matchRepository.find();
  }

  async create(matchDto: MatchDto): Promise<Match> {
    const match: Match = MatchDto.toEntity(matchDto);
    return await this.matchRepository.save(match);
  }

  async delete(idMatch: number): Promise<any> {
    return await this.matchRepository.delete(idMatch);
  }
}
