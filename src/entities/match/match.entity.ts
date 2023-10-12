import { PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany, Entity } from "typeorm";
import { User } from "../user/user.entity";

@Entity({name: 'matches'})
export class Match {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    datetime: Date;

    @ManyToOne(() => User)
    playerA1: User;
  
    @ManyToOne(() => User)
    playerA2: User;
  
    @ManyToOne(() => User)
    playerB1: User;
  
    @ManyToOne(() => User)
    playerB2: User;

    // @ManyToMany(() => User, user => user.matches)
    // @JoinTable()
    // players: User[];

    @Column()
    teamA: number;

    @Column()
    teamB: number;
}
