const Chance = require('chance');
const Repository = require('../../db/repository');

exports.seed = async function(knex, Promise) {
  const userRepo = new Repository(knex, 'users');
  const postRepo = new Repository(knex, 'posts');

  const chance = new Chance();

  const users = await userRepo.list();

  const futures = [];
  for (let i = 0; i < 100; i ++) {
    futures.push(postRepo.create({
      userId: chance.pickone(users).id,
      content: chance.sentence()
    }));
  }

  return Promise.all(futures);
};
