import { MatchDto } from 'src/dto/match-dto/match-dto';
export declare class MatchController {
    create(matchDto: MatchDto): string;
    getAll(): string;
    update(matchDto: MatchDto): string;
    delete(): string;
}
