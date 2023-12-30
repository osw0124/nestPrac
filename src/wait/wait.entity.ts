import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { WaitStatus } from './wait.type';

@Entity()
export class Wait {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: WaitStatus, default: 'wait' })
  status: string;

  @CreateDateColumn()
  createAt: Date;

  @Column('timestamp', { nullable: true })
  expireAt: Date;
}
