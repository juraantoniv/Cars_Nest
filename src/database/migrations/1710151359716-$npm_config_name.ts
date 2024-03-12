import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710151359716 implements MigrationInterface {
    name = ' $npmConfigName1710151359716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "currency"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "currency" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "currency"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "currency" jsonb array NOT NULL`);
    }

}
