import { UserDto } from 'src/dto/user-dto/user-dto';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    create(userDto: UserDto): Promise<User>;
    update(idUser: number, userDto: UserDto): Promise<User>;
    delete(idUser: number): Promise<any>;
}
