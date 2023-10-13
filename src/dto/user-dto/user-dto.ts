import { User } from "src/entities/user/user.entity";

export class UserDto {
    readonly id: number;
    readonly fullName?: string;
    readonly appName?: string;

    static toEntity(userDto: UserDto): User {
        const user = new User();
        user.id = userDto.id;
        user.fullName = userDto.fullName;
        user.appName = userDto.appName;
        return user;        
    }
}
