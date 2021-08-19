import { Prisma } from "@prisma/client";
import { Timestamp as DateTime } from "../utils/interfaces/common.interface";

export class Contact {}

export interface ContactModel {
  id: string;
  text: string;
  timestamps?: DateTime;
}

export type ContactParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.ContactWhereUniqueInput;
  where?: Prisma.ContactWhereInput;
  orderBy?: Prisma.ContactOrderByInput;
}
