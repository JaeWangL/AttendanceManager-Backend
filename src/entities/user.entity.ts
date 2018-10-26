import bcryptjs from 'bcryptjs';
import {
    BaseEntity,
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { TimeTable } from './timeTable.entity';

const BCRYPT_ROUNDS = 10;

@Entity('Users', { schema: 'dbo' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    @IsEmail()
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    password: string;

    @OneToMany(type => TimeTable, timeTable => timeTable.user)
    timeTables: TimeTable[];

    @BeforeInsert()
    async savePassword(): Promise<void> {
        if (this.password) {
            const hashedPassword = await bcryptjs.hash(this.password, BCRYPT_ROUNDS);
            this.password = hashedPassword;
        }
    }

    public comparePassword(password: string): Promise<boolean> {
        return bcryptjs.compare(password, this.password);
    }
}
