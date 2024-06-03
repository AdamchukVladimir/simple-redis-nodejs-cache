// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST') || 'localhost',
        port: configService.get<number>('POSTGRESS_PORT') || 5555,
        username: configService.get<string>('POSTGRES_USER') || 'postgres',
        password: configService.get<string>('POSTGRESS_PASSWORD') || '12345678',
        database: configService.get<string>('POSTGRES_DB') || 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //synchronize: true, // не рекомендуется для production
      }),
    }),
  ],
})
export class DatabaseModule {}
