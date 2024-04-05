import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserAndCreateComment1712347466072 implements MigrationInterface {
    name = 'UpdateUserAndCreateComment1712347466072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`mediaUrl\` varchar(255) NOT NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active', \`create_at\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`pasword\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateOfBirth\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'user') NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`gender\` enum ('male', 'female') NOT NULL DEFAULT 'male'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`update_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`create_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`gender\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateOfBirth\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`userName\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`pasword\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`age\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`comments\``);
    }

}
