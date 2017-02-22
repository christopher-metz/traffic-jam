'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('high_scores', (table) => {
    table.increments();
    table.string('user_name').notNullable().defaultTo('');
    table.integer('moves').notNullable().defaultTo(0);
    table.integer('time').notNullable().defaultTo(0);
    table.integer('score').notNullable().defaultTo(0);
    table.integer('level').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('high_scores');
};
