import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Skillset, Prisma } from '@prisma/client';
import { SkillModel, SkillParams} from './skill';
import { iCrud } from '../utils/interfaces/crud.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SkillService implements iCrud<SkillModel> {

  constructor(private readonly prismaService: PrismaService) {}

  async getAll(params: SkillParams): Promise<SkillModel[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prismaService.skillset.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    })
  }

  async getById(id: uuidv4): Promise<SkillModel> {
    return this.prismaService.skillset.findUnique({
      where: { id: id }
    });
  }

  async create(model: Prisma.SkillsetCreateInput): Promise<SkillModel> {
    return this.prismaService.skillset.create({ data: model });
  }

  async update(params: {
    id: uuidv4;
    data: Prisma.SkillsetUpdateInput;
  }): Promise<SkillModel> {
    const { id, data } = params;

    return this.prismaService.skillset.update({
      data,
      where: { id: id }
    })
  }

  async delete(id: uuidv4): Promise<SkillModel> {
    return this.prismaService.skillset.delete({
      where: { id: id }
    })
  }
}
