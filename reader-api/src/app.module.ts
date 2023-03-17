import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: process.env.MYSQL_HOST || "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "mydatabase",
      migrationsRun: true,
      logging: true,
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
