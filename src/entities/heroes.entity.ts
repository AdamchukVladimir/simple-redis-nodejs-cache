import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('heroes')
export class Heroes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hero1: number;

  @Column()
  hero2: number;

  @Column()
  firstbloodtime_avg: number;

  @Column()
  matchescount: number;

  @Column()
  matcheswin: number;

  @Column()
  radiantmatchescount: number;

  @Column()
  radiantmatcheswin: number;

  @Column()
  dirematchescount: number;

  @Column()
  dirematcheswin: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
