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

