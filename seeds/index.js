const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '642ab2dc421a6283e7909bb6',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo dolor accusamus enim. Eligendi, maiores minima cumque iure cum incidunt reiciendis repellendus. Inventore expedita eveniet quod dolor repellendus, et nostrum? Eos vitae itaque ducimus repellendus, nostrum doloremque voluptates mollitia eveniet nobis placeat dicta laudantium minus magni, minima consequuntur quam ratione expedita accusantium, nemo soluta facere fugit! Corporis mollitia iste ipsam. Accusantium harum voluptas eveniet ab, saepe, corporis eum vitae est itaque odio minus magni quis ducimus mollitia dolore, consequatur ipsam commodi explicabo? Saepe consequatur dolorum reiciendis exercitationem architecto tenetur ab!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/***REMOVED***/image/upload/v1684899875/YelpCamp/nn8ecehd7cbyaumnixpu.jpg',
                    filename: 'YelpCamp/nn8ecehd7cbyaumnixpu'
                },
                {
                    url: 'https://res.cloudinary.com/***REMOVED***/image/upload/v1684899879/YelpCamp/sam4vg7hcgy3m1lea84f.jpg',
                    filename: 'YelpCamp/sam4vg7hcgy3m1lea84f'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    db.close();
})