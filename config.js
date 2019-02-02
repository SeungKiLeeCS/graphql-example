function int(str, radix) {
  if (str === undefined) {
    return undefined;
  }

  return parseInt(str, radix);
}

module.exports.pgConnection = {
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  port: int(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};
