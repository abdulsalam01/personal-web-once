import { Prisma } from "@prisma/client";
import { Timestamp as DateTime } from "../utils/interfaces/common.interface";

export class About {}

export interface AboutModel {
  id: string;
  text: string;
  timestamps?: DateTime;
}

export type AboutParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.AboutWhereUniqueInput;
  where?: Prisma.AboutWhereInput;
  orderBy?: Prisma.AboutOrderByInput;
}
