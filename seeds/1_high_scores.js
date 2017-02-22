'use strict';

exports.seed = function(knex) {
  return knex('high_scores').del()
    .then(function () {
      return knex('high_scores').insert([
        {id: 1, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 1},
        {id: 2, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 1},
        {id: 3, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 1},
        {id: 4, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 2},
        {id: 5, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 2},
        {id: 6, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 2},
        {id: 7, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 3},
        {id: 8, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 3},
        {id: 9, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 3},
        {id: 10, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 4},
        {id: 11, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 4},
        {id: 12, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 4},
        {id: 13, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 5},
        {id: 14, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 5},
        {id: 15, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 5},
        {id: 16, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 6},
        {id: 17, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 6},
        {id: 18, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 6},
        {id: 19, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 7},
        {id: 20, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 7},
        {id: 21, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 7},
        {id: 22, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 8},
        {id: 23, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 8},
        {id: 24, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 8},
        {id: 25, user_name: 'Paul', moves: 12, time: 23, score: 276, level: 9},
        {id: 26, user_name: 'Jeff', moves: 14, time: 44, score: 616, level: 9},
        {id: 27, user_name: 'Clarissa', moves: 9, time: 10, score: 90, level: 9}
      ])
      .then(() => {
        return knex.raw("SELECT setval('high_scores_id_seq', (SELECT MAX(id) FROM high_scores));");
      });
    });
};
