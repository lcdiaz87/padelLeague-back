import { UserDto } from "../user-dto/user-dto";

export class MatchDto {
    datetime: Date;
    playerA1: UserDto;
    playerA2: UserDto;
    playerB1: UserDto;
    playerB2: UserDto;
    teamA: number;
    teamB: number;
}
