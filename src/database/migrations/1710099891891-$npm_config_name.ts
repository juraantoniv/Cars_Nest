import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710099891891 implements MigrationInterface {
    name = ' $npmConfigName1710099891891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" ALTER COLUMN "currency" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" ALTER COLUMN "currency" SET NOT NULL`);
    }

}
