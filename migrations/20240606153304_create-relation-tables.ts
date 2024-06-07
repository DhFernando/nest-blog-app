import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tags', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
    });

    await knex.schema.createTable('post_tag', function (table) {
        table.increments('id').primary();
        table.integer('postId').unsigned().references('id').inTable('posts').onDelete('CASCADE');
        table.integer('tagId').unsigned().references('id').inTable('tags').onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('post_tag');
    await knex.schema.dropTableIfExists('tags');
}

