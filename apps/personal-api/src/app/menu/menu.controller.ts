import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { BASE_PREFIX_V1 } from 'libs/constant';
import { MenuModel, MenuParams } from './menu';

@Controller(`${BASE_PREFIX_V1}/menu`)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getListMenu(@Query() params: MenuParams) {
    return this.menuService.getListMenu(params);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getMenu(@Param('id') param) {
    return this.menuService.getMenu(param);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async postMenu(@Body() menu: MenuModel) {
    return this.menuService.createMenu(menu);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateMenu(@Param('id') param, @Body() menu: MenuModel) {
    return this.menuService.updateMenu({id: param, data: menu});
  }

  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  async deleteMenu(@Param('id') param) {
    return this.menuService.deleteMenu(param);
  }
}
