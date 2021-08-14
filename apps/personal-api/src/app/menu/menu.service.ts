import { Menu, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MenuModel, MenuParams } from './menu';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MenuService {

  constructor(private readonly prisma: PrismaService) {}

  async getListMenu(params: MenuParams): Promise<MenuModel[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.menu.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getMenu(id: uuidv4): Promise<MenuModel | null> {
    return this.prisma.menu.findUnique({
      where: id
    });
  }

  async createMenu(menu: Prisma.MenuCreateInput): Promise<MenuModel> {
    return this.prisma.menu.create({data: menu});
  }

  async updateMenu(params: {
    id: uuidv4;
    data: Prisma.MenuUpdateInput;
  }): Promise<Menu> {
    const { id, data } = params;

    return this.prisma.menu.update({
      data,
      where: id
    })
  }

  async deleteMenu(id: uuidv4): Promise<MenuModel> {
    return this.prisma.menu.delete({ where: id });
  }
}
