import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710150978491 implements MigrationInterface {
    name = ' $npmConfigName1710150978491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" ALTER COLUMN "currency" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" ALTER COLUMN "currency" DROP NOT NULL`);
    }

}
