import { Prisma } from "@prisma/client";
import { Timestamp as DateTime } from "../utils/interfaces/common.interface";

export class Portfolio {}

export interface PortfolioModel {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
  timestamps?: DateTime;
}

export type PortfolioParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.PortofolioWhereUniqueInput;
  where?: Prisma.PortofolioWhereInput;
  orderBy?: Prisma.PortofolioOrderByInput;
}
