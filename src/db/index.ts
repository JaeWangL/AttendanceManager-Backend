import { ConnectionOptions } from 'typeorm';
import { TimeTable } from '../entities/timeTable.entity';
import { User } from '../entities/user.entity';

const connectionOptions: ConnectionOptions = {
    type: 'mssql',
    host: process.env.DB_HOST || '',
    port: 1433,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    entities: [
        TimeTable,
        User
    ],
    options: {
        encrypt: true,
    }
};

export default connectionOptions;
