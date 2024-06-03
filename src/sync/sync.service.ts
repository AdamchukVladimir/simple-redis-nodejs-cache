import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RedisService } from '../redis/redis.service';
import { HeroesService } from '../heroes/heroes.service';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);

  constructor(
    private readonly redisService: RedisService,
    private readonly heroesService: HeroesService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async syncHeroes() {
    try {
      const heroes = await this.heroesService.getAllHeroes();
      const redisClient = this.redisService.getRedisClient();

      // Очищаем данные в Redis
      const keys = await redisClient.keys('hero:*');
      for (const key of keys) {
        await redisClient.del(key);
      }

      // Записываем данные в Redis
      for (const hero of heroes) {
        const heroKey = `hero:${hero.id}`;
        await redisClient.hmset(heroKey, hero);
      }

      this.logger.log('Heroes data synchronized with Redis');
    } catch (error) {
      this.logger.error('Error synchronizing heroes data with Redis:', error);
    }
  }
}
