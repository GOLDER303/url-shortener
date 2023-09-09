import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  async getIndex() {
    const urls = await this.appService.getAllURLs();
    return { urls };
  }

  @Post('/shortURLs')
  @Redirect('/')
  async createShortURL(@Body('fullURL') fullURL: string) {
    await this.appService.createShortURL(fullURL);
  }
}
