import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710106615363 implements MigrationInterface {
    name = ' $npmConfigName1710106615363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersData" ALTER COLUMN "userPremiumRights" SET DEFAULT 'default'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersData" ALTER COLUMN "userPremiumRights" SET DEFAULT 'premium'`);
    }

}
