import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710155339373 implements MigrationInterface {
    name = ' $npmConfigName1710155339373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" ADD "check_of_valid" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "check_of_valid"`);
    }

}
