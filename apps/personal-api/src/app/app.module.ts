import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
