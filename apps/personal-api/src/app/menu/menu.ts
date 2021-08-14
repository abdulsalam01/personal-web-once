import { Prisma } from "@prisma/client";

export interface MenuModel {
  id: string;
  name: string;
  link: string;
  order?: number;
  createdAt?: Date;
  UpdateAt?: Date;
}

export type MenuParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.MenuWhereUniqueInput;
  where?: Prisma.MenuWhereInput;
  orderBy?: Prisma.MenuOrderByInput;
}

// mock-data
export const MenuData: MenuModel[] = [
  {id: '1', name: 'Home', link: '/home'},
  {id: '2', name: 'About', link: '/about'},
  {id: '3', name: 'Skill', link: '/skill'},
  {id: '4', name: 'Portfolio', link: '/portfolio'},
  {id: '5', name: 'Contact', link: '/contact'},
];
