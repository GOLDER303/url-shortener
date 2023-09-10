import { Injectable } from '@nestjs/common';
import { Url } from '@prisma/client';
import { nanoid } from 'nanoid';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getAllURLs(): Promise<Url[]> {
    return await this.prisma.url.findMany();
  }

  async getURL(shortURL: string) {
    return await this.prisma.url.findUnique({ where: { shortURL } });
  }

  async createShortURL(fullURL: string): Promise<Url> {
    return await this.prisma.url.create({
      data: {
        fullURL,
        shortURL: nanoid(6),
      },
    });
  }
}
