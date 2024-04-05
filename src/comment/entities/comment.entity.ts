import { activeStatus } from "src/constants";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  content: string;

  @Column()
  mediaUrl: string;

  @Column({ type: 'enum', enum: activeStatus, default: activeStatus.ACTIVE })
  status: activeStatus;

  @Column({ type: 'timestamp' })
  create_at: Timestamp;
}
