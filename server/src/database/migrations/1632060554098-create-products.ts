import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProducts1632060554098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
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
            name: 'price',
            type: 'decimal',
            scale: 2,
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'size',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'quantity_views',
            type: 'integer',
            isNullable: true,
            default: 0,
          },
          {
            name: 'show_banner',
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
            name: 'thumbnail_url',
            type: 'varchar',
            length: '50',
            isNullable: true,
            default: null,
          },
          {
            name: 'owner_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'type_id',
            type: 'integer',
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
        foreignKeys: [
          {
            columnNames: ['owner_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            columnNames: ['type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products_types',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
