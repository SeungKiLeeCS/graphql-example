const Chance = require('chance');
const Repository = require('../../db/repository');

exports.seed = async function(knex, Promise) {
  const adRepo = new Repository(knex, 'ads');

  const chance = new Chance();

  const futures = [];
  for (let i = 0; i < 50; i ++) {
    futures.push(adRepo.create({
      content: chance.sentence(),
      link: chance.pickone([undefined, chance.url()])
    }));
  }

  return Promise.all(futures);
};
