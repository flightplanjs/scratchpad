import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import AppCore from 'result-app-core';

@Controller('/api')
export class AppController {
  core: AppCore;

  constructor(private readonly appService: AppService) {
    this.core = new AppCore('hello world');
  }

  @Get()
  getHello(): any {
    return { message: this.core.getMessage() };
  }
}
