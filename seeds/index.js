const sequelize = require ('../config/connection');

const seedStuff = async () => {
    await sequelize.sync({force: true})
    console.log('\n---SYNCED---\n');


    console.log('\n---SEEDED---\n');
    process.exit(0)
};

seedStuff();