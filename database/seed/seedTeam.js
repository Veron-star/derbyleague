const faker = require("faker");
const Team = require("./../../models/Team");

async function seedData() {
    // delete everything inside db
    Team.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    
        const user = new Team({
            title: faker.company.companyName(),
            location: faker.address.city(),
            homepage: faker.internet.url(),
            timestamps: faker.date.recent(),
        })
    
        Team.create(user)
        // user.save()
    }

    console.log('usercreated');

}

module.exports = seedData;
