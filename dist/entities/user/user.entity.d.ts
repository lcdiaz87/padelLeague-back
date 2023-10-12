import { Match } from "../match/match.entity";
export declare class User {
    id: number;
    name: string;
    surname: string;
    appName: string;
    playerA1: Match[];
    playerA2: Match[];
    playerB1: Match[];
    playerB2: Match[];
}
