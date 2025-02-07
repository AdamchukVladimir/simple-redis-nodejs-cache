import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HeroesModule } from './heroes/heroes.module';
import { RedisModule } from './redis/redis.module';
import { SyncModule } from './sync/sync.module';

@Module({
  imports: [DatabaseModule, HeroesModule, RedisModule, SyncModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
