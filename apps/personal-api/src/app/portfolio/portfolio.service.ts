import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PortfolioModel, PortfolioParams } from './portfolio';
import { v4 as uuidv4 } from 'uuid';
import { iCrud } from '../utils/interfaces/crud.interface';

@Injectable()
export class PortfolioService implements iCrud<PortfolioModel> {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(data: any): Promise<PortfolioModel[]> {
    throw new Error('Method not implemented.');
  }

  async getById(id: any): Promise<PortfolioModel> {
    throw new Error('Method not implemented.');
  }

  async create(model: any): Promise<PortfolioModel> {
    throw new Error('Method not implemented.');
  }

  async update(data: any): Promise<PortfolioModel> {
    throw new Error('Method not implemented.');
  }

  async delete(id: any): Promise<PortfolioModel> {
    throw new Error('Method not implemented.');
  }
}
