import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MatchController } from './match/match.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, MatchController],
  providers: [AppService],
})
export class AppModule {}
