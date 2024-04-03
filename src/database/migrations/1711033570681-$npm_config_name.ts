import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1711033570681 implements MigrationInterface {
    name = ' $npmConfigName1711033570681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_c05d5bce86a0bcbefe2e94fdeb5"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_c05d5bce86a0bcbefe2e94fdeb5" FOREIGN KEY ("cars_id") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_c05d5bce86a0bcbefe2e94fdeb5"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_c05d5bce86a0bcbefe2e94fdeb5" FOREIGN KEY ("cars_id") REFERENCES "Cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
