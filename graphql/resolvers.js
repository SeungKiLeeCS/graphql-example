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
    }
  }
}
