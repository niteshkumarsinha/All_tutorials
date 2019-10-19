const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to MongoDb"))
    .catch(err => console.error("Couldn't connect to MongoDB", err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

//Course Class Model using the schema
const Course = mongoose.model('Course', courseSchema) //Singular name of collection the model is for collectionsName in Plural.


async function createCourse() {
    //this object maps to a document in  MongoDb Database
    const course = new Course({ name: "Angular Course", author: "Mosh", tags: ['node', 'backend'], isPublished: true })
    const result = await course.save();
    console.log(result)
}

createCourse()

