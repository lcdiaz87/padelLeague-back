import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user-dto/user-dto';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private readonly userRepository: Repository<User>){}

    async getAll(): Promise<User[]>{
        return await this.userRepository.find();
    }


    async create(userDto: UserDto): Promise<User>{
        return await this.userRepository.save(userDto);
    }

    async update(idUser: number, userDto: UserDto): Promise<User>{
        const userToBeUpdated: User = await this.userRepository.findOne({where:{id: idUser}});
        userToBeUpdated.name = userDto.name;
        userToBeUpdated.surname = userDto.surname;
        userToBeUpdated.appName = userDto.appName;
        return await this.userRepository.save(userToBeUpdated);
    }

    async delete(idUser: number): Promise<any>{
        return await this.userRepository.delete(idUser);
    }



    

}
