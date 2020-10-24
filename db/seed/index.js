const connectDb = require('./../connect');
const userSeeder = require('./seedUser');
const scoreSeeder = require('./seedScore');

// connected to DB
connectDb();


async function seed(){
    // will run all the seeder files

    await scoreSeeder();
    await userSeeder();

}

seed();

