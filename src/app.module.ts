import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './mathservice/math.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MathService,],
})
export class AppModule {}
