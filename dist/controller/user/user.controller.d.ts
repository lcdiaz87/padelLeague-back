import { UserDto } from 'src/dto/user-dto/user-dto';
import { UserService } from 'src/services/user/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userDto: UserDto): void;
    getAll(): void;
    update(userDto: UserDto, response: any, idUser: any): void;
    delete(response: any, idUser: number): void;
}
