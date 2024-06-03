import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
private redisClient: Redis;

constructor() {
    this.redisClient = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    //password: process.env.REDIS_PASSWORD || undefined,
    });
}

getRedisClient(): Redis {
    return this.redisClient;
}
}