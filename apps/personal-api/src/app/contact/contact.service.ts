import { Injectable } from '@nestjs/common';
import { ContactModel, ContactParams } from './contact';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { iCrud } from '../utils/interfaces/crud.interface';

@Injectable()
export class ContactService implements iCrud<ContactModel> {

  constructor(private readonly prismaService: PrismaService) {}

  async getAll(data: any): Promise<ContactModel[]> {
    throw new Error('Method not implemented.');
  }

  async getById(id: any): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }

  async create(model: any): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }

  async update(data: any): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }

  async delete(id: any): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }

}
