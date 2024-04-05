import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1712243270865 implements MigrationInterface {
    name = 'CreateUserTable1712243270865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullName\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`pasword\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
