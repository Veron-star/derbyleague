const connectDb = require('./../connect');
const userSeeder = require('./seedUser');
const teamSeeder = require('./seedTeam');

// connected to DB
connectDb();


async function seed(){
    // will run all the seeder files

    await teamSeeder();
    await userSeeder();

}

seed()

