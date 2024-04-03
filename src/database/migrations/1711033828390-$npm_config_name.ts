import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1711033828390 implements MigrationInterface {
    name = ' $npmConfigName1711033828390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "views" DROP CONSTRAINT "FK_8081f5698045410f5099bb0c56e"`);
        await queryRunner.query(`ALTER TABLE "views" ADD CONSTRAINT "FK_8081f5698045410f5099bb0c56e" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "views" DROP CONSTRAINT "FK_8081f5698045410f5099bb0c56e"`);
        await queryRunner.query(`ALTER TABLE "views" ADD CONSTRAINT "FK_8081f5698045410f5099bb0c56e" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
