import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heroes } from '../entities/heroes.entity';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Heroes])],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}