import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  @Index()
  id: number;

  @Column()
  @Index()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
