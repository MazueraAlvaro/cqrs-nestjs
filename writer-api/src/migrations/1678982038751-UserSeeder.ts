import { MigrationInterface, QueryRunner } from "typeorm";

export class UserSeeder1678982038751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO user (username, firstname, lastname) VALUES 
        ('mazueraalvaro', 'Alvaro', 'Mazuera'), 
        ('dayannav', 'Dayanna Vanessa', 'Suarez'), 
        ('goalkeeper', 'Camilo', 'Sanchez');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
