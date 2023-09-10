import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  Res,
} from '@nestjs/common';
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

  @Get('/redirect/:shortURL')
  async redirectToFullURL(@Param('shortURL') shortURL: string, @Res() res) {
    if (!shortURL) {
      res.status(302).redirect('/');
    }

    const url = await this.appService.getURL(shortURL);

    if (!url) {
      res.status(302).redirect('/');
    }

    res.status(302).redirect(url.fullURL);
  }
}
