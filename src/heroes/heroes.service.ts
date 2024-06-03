import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Heroes } from '../entities/heroes.entity';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Heroes)
    private heroRepository: Repository<Heroes>
  ) {}

  async findAll(): Promise<Heroes[]> {
    return this.heroRepository.find();
  }

  async getAllHeroes(): Promise<Heroes[]> {
    return this.heroRepository.find();
  }
  // async getAllHeroes(): Promise<Heroes[]> {
  //   return this.heroRepository.find({
  //     where: {
  //       hero1: 23
  //     }
  //   });
  // }

  async getOneFromHeroes(): Promise<Heroes> {
    return this.heroRepository.findOneBy({
      hero1: 22
  });
  }
  
  
}
