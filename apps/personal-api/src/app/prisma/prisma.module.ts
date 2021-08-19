import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  controllers: [],
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
