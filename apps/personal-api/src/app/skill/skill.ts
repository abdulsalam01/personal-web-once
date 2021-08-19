import { Prisma } from "@prisma/client";
import { Timestamp as DateTime } from "../utils/interfaces/common.interface";

export class Skill {}

export interface SkillModel {
  id: string
  name: string
  rate: number
  timestamps?: DateTime
}

export type SkillParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.SkillsetWhereUniqueInput;
  where?: Prisma.SkillsetWhereInput;
  orderBy?: Prisma.SkillsetOrderByInput;
}
