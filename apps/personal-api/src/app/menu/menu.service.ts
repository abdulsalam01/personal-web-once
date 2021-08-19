import { Menu, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MenuModel, MenuParams } from './menu';
import { v4 as uuidv4 } from 'uuid';
import { iCrud } from '../utils/interfaces/crud.interface';

@Injectable()
export class MenuService implements iCrud<MenuModel> {

  constructor(private readonly prisma: PrismaService) {}

  async getAll(params: MenuParams): Promise<MenuModel[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.menu.findMany({
      skip: +skip,
      take: +take,
      cursor,
      where,
      orderBy,
    });
  }

  async getById(id: uuidv4): Promise<MenuModel> {
    return this.prisma.menu.findUnique({
      where: { id: id }
    });
  }

  async create(menu: Prisma.MenuCreateInput): Promise<MenuModel> {
    return this.prisma.menu.create({ data: menu });
  }

  async update(params: {
      id: uuidv4;
      data: Prisma.MenuUpdateInput;
    }): Promise<MenuModel> {
      const { id, data } = params;

      return this.prisma.menu.update({
        data,
        where: { id: id }
      })
  }

  async delete(id: uuidv4): Promise<MenuModel> {
    return this.prisma.menu.delete(
      { where:
        { id: id }
      });
  }
}
