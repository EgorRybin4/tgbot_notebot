import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  webhookUpdate(@Body() params): string {
    return this.appService.webhookUpdate(params);
  }
  @Get()
  async test(){
    return await this.appService.create();
  }
}
