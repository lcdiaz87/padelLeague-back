import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";
import { Match } from "../match/match.entity";

@Entity({ name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;
    
    @Column({unique: true})
    appName: string;

    @OneToMany(() => Match, match => match.playerA1)
    playerA1: Match[];

    @OneToMany(() => Match, match => match.playerA2)
    playerA2: Match[];

    @OneToMany(() => Match, match => match.playerB1)
    playerB1: Match[];

    @OneToMany(() => Match, match => match.playerB2)
    playerB2: Match[];
}
