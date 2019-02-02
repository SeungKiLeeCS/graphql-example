const Chance = require('chance');
const Repository = require('../../db/repository');

exports.seed = async function(knex, Promise) {
  const userRepo = new Repository(knex, 'users');
  const checkinRepo = new Repository(knex, 'checkins');

  const chance = new Chance();

  const users = await userRepo.list();

  const futures = [];
  for (let i = 0; i < 100; i ++) {
    futures.push(checkinRepo.create({
      userId: chance.pickone(users).id,
      latitude: chance.latitude(),
      longitude: chance.longitude()
    }));
  }

  return Promise.all(futures);
};
