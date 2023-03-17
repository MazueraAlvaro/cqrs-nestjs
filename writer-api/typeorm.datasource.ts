import { User } from "src/entities/user.entity";
import { UserSeeder1678982038751 } from "src/migrations/1678982038751-UserSeeder";
import { DataSource } from "typeorm";

export const DATA_SOURCE = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "mydatabase",
  entities: [User],
  migrations: [UserSeeder1678982038751],
});
