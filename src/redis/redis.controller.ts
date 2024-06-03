import { Controller, Get } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get('test')
  async testRedisConnection(): Promise<string> {
    const redisClient = this.redisService.getRedisClient();

    try {
      await redisClient.set('testKey', 'testValue');
      const value = await redisClient.get('testKey');
      return `Redis connection successful. Value: ${value}`;
    } catch (error) {
      return `Redis connection failed: ${error.message}`;
    }
  }

  @Get()
  async getAllHeroes(): Promise<object[]> {
    const redisClient = this.redisService.getRedisClient();
    const heroKeys = await redisClient.keys('hero:*');

  const heroes = await Promise.all(
    heroKeys.map(async (key) => {
      const heroData = await redisClient.hgetall(key);
      return heroData;
    })
  );

  return heroes;
  }
}
