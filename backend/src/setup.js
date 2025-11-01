<<<<<<< HEAD
const { sequelize } = require('./config/sequelize')
const dotenv = require('dotenv')
=======
<<<<<<< HEAD
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
>>>>>>> ec3de5f (auth backend)

dotenv.config()
beforeAll(async () => {
  // Sync all models and create tables
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  // Completely reset tables (data + auto-increment)
  await Promise.all(
    Object.values(sequelize.models).map((model) =>
      model.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
      })
    )
  );
});

afterAll(async () => {
<<<<<<< HEAD
=======
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
=======
const { sequelize } = require('./config/sequelize')
const dotenv = require('dotenv')

dotenv.config()
beforeAll(async () => {
  // Sync all models and create tables
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  // Completely reset tables (data + auto-increment)
  await Promise.all(
    Object.values(sequelize.models).map((model) =>
      model.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
      })
    )
  );
});

afterAll(async () => {
>>>>>>> ec3de5f (auth backend)
  // Drop all tables and close DB connection
  await sequelize.drop();
  await sequelize.close();
});
<<<<<<< HEAD
=======
>>>>>>> 123bb57 (Auth backend)
>>>>>>> ec3de5f (auth backend)
