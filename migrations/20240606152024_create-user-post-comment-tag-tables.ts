import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    try{
        await knex.schema.createTable('users', function (table) {
            table.increments('id').primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('role').notNullable();
        });
    
        await knex.schema.createTable('posts', function (table) {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('content').notNullable();
            table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
        });
    
        await knex.schema.createTable('comments', function (table) {
            table.increments('id').primary();
            table.text('content').notNullable();
            table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.integer('postId').unsigned().references('id').inTable('posts').onDelete('CASCADE');
        });
    }catch(e){
        console.log(e)
    }

}


export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('posts');
    await knex.schema.dropTableIfExists('comments');
}

