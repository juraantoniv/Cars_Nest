import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710103924683 implements MigrationInterface {
    name = ' $npmConfigName1710103924683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "views" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "car_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_ae7537f375649a618fff0fb2cb6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "views" ADD CONSTRAINT "FK_8081f5698045410f5099bb0c56e" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "views" ADD CONSTRAINT "FK_5a616073aea982ac9a6c5eb40d1" FOREIGN KEY ("user_id") REFERENCES "usersData"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "views" DROP CONSTRAINT "FK_5a616073aea982ac9a6c5eb40d1"`);
        await queryRunner.query(`ALTER TABLE "views" DROP CONSTRAINT "FK_8081f5698045410f5099bb0c56e"`);
        await queryRunner.query(`DROP TABLE "views"`);
    }

}
