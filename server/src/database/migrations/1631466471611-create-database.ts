import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDatabase1631466471611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('youmall', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('youmall');
  }
}
