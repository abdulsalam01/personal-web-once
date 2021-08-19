import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillModel, SkillParams } from './skill';

@Controller('/skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getList(@Query() params: SkillParams) {
    return this.skillService.getAll(params);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id') param) {
    return this.skillService.getById(param);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async post(@Body() data: SkillModel) {
    return this.skillService.create(data);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async update(@Param('id') param, @Body() data: SkillModel) {
      return this.skillService.update({id: param, data});
    }

  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  async delete(@Param('id') param) {
    return this.skillService.delete(param);
  }
}
