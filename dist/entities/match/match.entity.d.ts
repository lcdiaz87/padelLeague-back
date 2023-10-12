import { User } from "../user/user.entity";
export declare class Match {
    id: number;
    datetime: Date;
    playerA1: User;
    playerA2: User;
    playerB1: User;
    playerB2: User;
    teamA: number;
    teamB: number;
}
