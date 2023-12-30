import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isReservation: boolean;

  @Column()
  booker: string;

  @Column('timestamp', { nullable: true })
  bookingAt: Date;

  @Column()
  price: number;
}
