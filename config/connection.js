<<<<<<< HEAD
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
=======
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
host: process.env.HOST,
dialect: 'mysql',
port: process.env.DB_PORT || 3306,
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
},
});

(async () => {
try {
await sequelize.authenticate();
console.log('Connection has been established successfully.');
} catch (error) {
console.error('Unable to connect to the database:', error);
}
})();

module.exports = sequelize;

>>>>>>> 85467460afca82d05cd8b5b03514be5fb4999494
