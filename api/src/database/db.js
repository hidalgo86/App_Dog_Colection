const { Umzug, SequelizeStorage } = require("umzug");
const { sequelize, models } = require("../models");
const path = require("path");

const runMigrations = async () => {
  const migrator =  new Umzug({
    migrations: { glob: 'migrations/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  });

const migrations = await migrator.up()
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
};

const connectToDatabase = async () => {
  try {
    await sequelize.sync();
    // highlight-start
    await runMigrations();
    // highlight-end
    console.log("connected to the database");
  } catch (err) {
    console.log("failed to connect to the database");
    console.log(err);
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
