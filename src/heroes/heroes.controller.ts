import { Controller, Get } from '@nestjs/common';
import { Heroes } from '../entities/heroes.entity';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async getAllHeroes(): Promise<Heroes[]> {
    return this.heroesService.getAllHeroes();
  }
  @Get('hero1')
  async getOneFromHeroes(): Promise<Heroes> {
    return this.heroesService.getOneFromHeroes();
  }
  
}