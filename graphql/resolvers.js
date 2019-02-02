const Chance = require('chance');

const chance = new Chance();

module.exports = {
  Query: {
    getUsers: (root, args, context) => {
      return context.db.users.list();
    },

    getUser: (root, args, context) => {
      return context.db.users.findBy({ id: args.id });
    },

    getFeed: async (root, args, context) => {
      const posts = await context.db.posts.list();
      const checkins = await context.db.checkins.list();
      const ads = await context.db.ads.list();

      // Combine posts and checkins
      const feed = [...posts, ...checkins].sort((a, b) => a.createdAt - b.createdAt);

      // Intersperse some ads
      for (let i = 1; i < feed.length / 7; i++) {
        feed.splice(i * 7, 0, chance.pickone(ads));
      }

      return feed;
    }
  },

  User: {
    posts: (root, args, context) => {
      return context.db.posts.list({ userId: root.id })
    }
  },

  Post: {
    user: (root, args, context) => {
      return context.db.users.findBy({ id: root.userId });
    }
  },

  Checkin: {
    user: (root, args, context) => {
      return context.db.users.findBy({ id: root.userId });
    }
  },

  FeedItem: {
    __resolveType: (item) => {
      switch (item.__type) {
        case 'posts':
          return 'Post';
        case 'checkins':
          return 'Checkin';
        case 'ads':
          return 'Ad';
        default:
          return null;
      }
    }
  }
}
