import 'dotenv/config';
import { DataSource } from "typeorm";

const connectDB = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["./src/entities/**/*.ts"],
    migrations: ["./src/database/migrations/*{.ts,.js}"],
});

export default connectDB;
