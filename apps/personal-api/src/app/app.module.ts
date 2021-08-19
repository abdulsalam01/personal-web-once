import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { IndexModule } from './index/index.module';

@Module({
  imports: [PrismaModule, IndexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
