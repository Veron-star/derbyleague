const connectDb = require('./../connect');
const userSeeder = require('./seedUser');

// connected to DB
connectDb();


async function seed(){
    // will run all the seeder files

    await userSeeder();

}

seed()

