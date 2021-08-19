import { Module } from '@nestjs/common';
import { IndexService } from './index.service';
import { IndexController } from './index.controller';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { MenuModule } from '../menu/menu.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { SkillModule } from '../skill/skill.module';

@Module({
  imports: [AboutModule, ContactModule, MenuModule, PortfolioModule, SkillModule],
  controllers: [IndexController],
  providers: [IndexService]
})
export class IndexModule {}
