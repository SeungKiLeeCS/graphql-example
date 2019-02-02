module.exports = {
  Query: {
    users: (root, args, context) => {
      return context.db.users.list();
    },

    user: (root, args, context) => {
      return context.db.users.findBy({ id: args.id });
    }
  }
}
