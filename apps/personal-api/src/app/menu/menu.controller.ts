import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuModel, MenuParams } from './menu';

@Controller(`menu`)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getList(@Query() params: MenuParams) {
    return this.menuService.getAll(params);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id') param) {
    return this.menuService.getById(param);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async post(@Body() menu: MenuModel) {
    return this.menuService.create(menu);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async update(@Param('id') param, @Body() menu: MenuModel) {
    return this.menuService.update({id: param, data: menu});
  }

  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  async delete(@Param('id') param) {
    return this.menuService.delete(param);
  }
}
