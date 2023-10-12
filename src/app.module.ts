import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { MatchController } from './controller/match/match.controller';
import { UserController } from './controller/user/user.controller';
import { MatchService } from './services/match/match.service';
import { Match } from './entities/match/match.entity';
import { User } from './entities/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'padelLeague',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Match]),
  ],
  controllers: [AppController, UserController, MatchController],
  providers: [AppService, UserService, MatchService],
})
export class AppModule { }
