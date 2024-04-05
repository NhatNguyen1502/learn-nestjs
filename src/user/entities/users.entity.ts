import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from 'typeorm';
import { userRole, gender, activeStatus } from './../../constants/index';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  fullName: string;

  @Column()
  userName: string;

  @Column({ nullable: true, type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 12 })
  phoneNumber: string;

  @Column({ type: 'enum', enum: userRole, default: userRole.USER })
  role: userRole;

  @Column({ type: 'enum', enum: gender, default: gender.MALE })
  gender: gender;

  @Column({ type: 'enum', enum: activeStatus, default: activeStatus.ACTIVE })
  status: activeStatus;

  @CreateDateColumn()
  create_at: Timestamp;

  @UpdateDateColumn({ type: 'timestamp' })
  update_at: Timestamp;
}
