import { Injectable } from '@nestjs/common';
import { AboutModel, AboutParams } from './about';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { iCrud } from '../utils/interfaces/crud.interface';

@Injectable()
export class AboutService implements iCrud<AboutModel>{
  constructor(private readonly prismaService: PrismaService) {}

  getAll(data: any): Promise<AboutModel[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: any): Promise<AboutModel> {
    throw new Error('Method not implemented.');
  }
  create(model: any): Promise<AboutModel> {
    throw new Error('Method not implemented.');
  }
  update(data: any): Promise<AboutModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: any): Promise<AboutModel> {
    throw new Error('Method not implemented.');
  }
}
