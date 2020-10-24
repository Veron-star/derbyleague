const faker = require("faker");
const Score = require("../../routes/score");

async function seedScore() {
    // delete everything inside db
    Score.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    
        const user = new Score({
            title: faker.company.companyName(),
            location: faker.address.city(),
            homepage: faker.internet.url(),
            timestamps: faker.date.recent(),
        })
    
        Score.create(user)
        // user.save()
    }

    console.log('usercreated');

}

module.exports = seedScore;
