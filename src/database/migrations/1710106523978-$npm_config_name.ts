import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710106523978 implements MigrationInterface {
    name = ' $npmConfigName1710106523978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersData" ALTER COLUMN "userPremiumRights" SET DEFAULT 'premium'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersData" ALTER COLUMN "userPremiumRights" SET DEFAULT 'default'`);
    }

}
