const faker = require("faker");
const User = require("../../models/User");

async function seedData() {
    // delete everything inside db
    User.collection.deleteMany();

    // for loop to generate X amount of records in my db

    for (let index = 0; index < 50; index++) {
    
        const user = new User({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: "secret",
        })
    
        User.create(user)
        // user.save()
    }

    console.log('usercreated');

}

module.exports = seedData;
