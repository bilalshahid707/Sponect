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
  // Drop all tables and close DB connection
  await sequelize.drop();
  await sequelize.close();
});
