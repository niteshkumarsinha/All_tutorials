const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mongo-exercise")
    .then(() => { console.log("Connected to MongoDb") })
    .catch(err => { console.log(err.message) })


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('course', courseSchema)


// async function getCourses() {
//     return await Course.find({ tags: { $in: ["frontend", "backend"] } }).sort({ price: -1 }).select({ name: 1, author: 1 })
//     //return await Course.find({ tags: { $in: ["frontend", "backend"] } }).sort('-price').select('name author')

// }

async function getCourses() {
    return await Course.find({ isPublished: true }).or([{ price: { $gte: 15 } }, { name: /.*by.*/ }]).sort('-price').select('name author price')
}


async function display() {

    const courses = await getCourses()
    console.log(courses)
}

display()