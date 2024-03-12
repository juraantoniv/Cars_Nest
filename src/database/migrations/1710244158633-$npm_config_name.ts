import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710244158633 implements MigrationInterface {
    name = ' $npmConfigName1710244158633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."usersData_active_enum" AS ENUM('active', 'banned')`);
        await queryRunner.query(`ALTER TABLE "usersData" ADD "active" "public"."usersData_active_enum" NOT NULL DEFAULT 'active'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersData" DROP COLUMN "active"`);
        await queryRunner.query(`DROP TYPE "public"."usersData_active_enum"`);
    }

}
