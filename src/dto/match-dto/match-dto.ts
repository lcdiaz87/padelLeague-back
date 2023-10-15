import { Match } from "src/entities/match/match.entity";
import { UserDto } from "../user-dto/user-dto";

export class MatchDto {
    id?: number;
    datetime?: Date;
    playerA1?: UserDto;
    playerA2?: UserDto;
    playerB1?: UserDto;
    playerB2?: UserDto;
    scoreA?: number;
    scoreB?: number;
  
    static toEntity(matchDto: MatchDto): Match {
      const match = new Match();
      match.id = matchDto.id;
      match.datetime = matchDto.datetime;
      match.playerA1 = UserDto.toEntity(matchDto.playerA1);
      match.playerA2 = UserDto.toEntity(matchDto.playerA2);
      match.playerB1 = UserDto.toEntity(matchDto.playerB1);
      match.playerB2 = UserDto.toEntity(matchDto.playerB2);
      match.scoreA = matchDto.scoreA;
      match.scoreB = matchDto.scoreB;
      return match;
    }
  }
  