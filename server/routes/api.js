const router = require('express').Router()
const knex = require('../../knex')

router.get('/:level', (req, res, next) => {
  knex('high_scores')
    .where('level', req.params.level)
    .orderBy('score')
    .then((high_score) => {
      res.send(high_score);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { user_name, moves, time, score, level } = req.body;

  knex('high_scores')
    .insert({ user_name, moves, time, score, level }, '*')
    .then((high_score) => {
      res.send(high_score);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router
