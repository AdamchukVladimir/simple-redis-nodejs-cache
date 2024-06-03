import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RedisModule } from '../redis/redis.module';
import { HeroesModule } from '../heroes/heroes.module';
import { SyncService } from './sync.service';
import { RedisService } from 'src/redis/redis.service';
import { HeroesService } from 'src/heroes/heroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heroes } from '../entities/heroes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Heroes]), ScheduleModule.forRoot(), RedisModule, HeroesModule],
  providers: [SyncService, RedisService, HeroesService],
  exports: [SyncService],
})
export class SyncModule {}
