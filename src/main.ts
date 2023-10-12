import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'http://localhost:4200', 
    optionsSuccessStatus: 200,  // Algunas versiones de algunos navegadores pueden requerir esto
  }));

  await app.listen(3000);
}
bootstrap();
