const Repository = require('../../db/repository');

const data = [
  {
    name: 'Jake Peralta',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710'
  }, {
    name: 'Rosa Diaz',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/76/RosaS5.jpg/revision/latest?cb=20171103224359'
  }, {
    name: 'Ray Holt',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/c/ca/HoltS5.jpg/revision/latest/scale-to-width-down/350?cb=20171103223700'
  }, {
    name: 'Terry Jeffords',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/f/fd/TerryS5.jpg/revision/latest/scale-to-width-down/2000?cb=20171103223830'
  }, {
    name: 'Gina Linetti',
    picture: 'https://pbs.twimg.com/profile_images/432736047282552832/wbylDSJS_400x400.jpeg'
  }, {
    name: 'Charles Boyle',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/c/c5/BoyleS5.jpg/revision/latest?cb=20171103224410'
  }, {
    name: 'Amy Santiago',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/0/06/AmyS5.jpg/revision/latest?cb=20171103223729'
  }, {
    name: 'Scully',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/6/65/ScullyS5.jpg/revision/latest?cb=20171103224426'
  }, {
    name: 'Hitchcock',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/3/31/HitchcockS5.jpg/revision/latest?cb=20171103224421'
  }, {
    name: 'Sophia Perez',
    picture: 'https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7a/Sophia_Perez.jpg/revision/latest?cb=20150530173455'
  }
]

exports.seed = function(knex, Promise) {
  const userRepo = new Repository(knex, 'users');

  return Promise.all(data.map(u => userRepo.create(u)));
};
