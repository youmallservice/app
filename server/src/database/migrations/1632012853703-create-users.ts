import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1632012853703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isUnique: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'document',
            type: 'varchar',
            length: '14',
            isNullable: false,
          },
          {
            name: 'phone_1',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'phone_2',
            type: 'varchar',
            length: '50',
            isNullable: true,
            default: null,
          },
          {
            name: 'isAdmin',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'avatar_url',
            type: 'varchar',
            length: '50',
            isNullable: true,
            default: null,
          },
          {
            name: 'street',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'number_house',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '8',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
