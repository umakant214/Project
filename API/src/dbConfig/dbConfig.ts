import "reflect-metadata";
import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Umakant@1234",
  database: "todo",
  synchronize: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/entities/migration/**/*.ts"],
  subscribers: ["src/entities/subscriber/**/*.ts"],
});
