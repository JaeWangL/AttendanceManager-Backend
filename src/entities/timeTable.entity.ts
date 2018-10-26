import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('TimeTables', { schema: 'dbo' })
export class TimeTable extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    userId: number;

    @Column('tinyint')
    day: number;

    @Column('tinyint')
    period: number;

    @ManyToOne(type => User, user => user.timeTables)
    user: User;
}