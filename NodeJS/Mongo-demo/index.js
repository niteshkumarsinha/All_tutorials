const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise')
    .then(() => console.log("Connected to MongoDb"))
    .catch(err => console.error("Couldn't connect to MongoDB", err))

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        //match: /pattern/
    }, //name: String, //
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        //uppercase: true,
        trim: true
        //category must be of one of these values

    },
    author: String,
    // tags: [String],

    //Custom Validators
    tags: {
        type: Array,
        validate: {
            isAsync: true, //makes it a async validator
            validator: function (v, callback) {
                //Do some async work and when the result is ready we run callback
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result)
                }, 1000);
            },
            message: 'A course should have at least one tag'
        }
    },
    date: Date,
    isPublished: Boolean,
    //price: Number

    price: {
        type: Number,
        required: function () {
            return this.isPublished;
        },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
        // So we can set the required to boolean or a function
    }
})

//Course Class Model using the schema
const Course = mongoose.model('course', courseSchema) //Singular name of collection the model is for collectionsName in Plural.


async function createCourse() {
    //this object maps to a document in  MongoDb Database
    const course = new Course({
        name: "Angular Course",
        author: "Mosh", category: "Web", tags: ['node', 'backend'], isPublished: true
    })

    try {
        // await course.validate()
        const result = await course.save();
        console.log(result)
    }

    catch (err) {
        for (field in err.errors) {
            console.log(err.errors[field]);
        }
    }

}

async function getCourses() {
    //COMPARISON OPERATORS
    // eq - Equal
    // ne - not Equal
    // gt - greater tha
    // gte - greater than or equal to
    // lt - less than
    // lte - less than or equal to 
    // in 
    // nin - not in

    // const courses = await Course.find()

    // const courses = await Course.find({price: {$gte: 10, $lte : 20}})
    // const courses = await Course.find({ price: { $in: [10, 15, 20] } })

    //LOGICAL OPERATORS (    or and)
    // const courses = await Course.find()
    //     .or([{ author: "Mosh" }, { isPublished: true }])

    //Regular expressions

    //Starts with Mosh
    // const courses = await Course.find({ author: /^Mosh/, isPublished: true })

    //Ends with Hamedani and case insensitive
    // const courses = await Course.find({ author: /Hamedani$/i, isPublished: true })

    //Author contains Mosh
    //const courses = await Course.find({ author: /.*Mosh.*/i, isPublished: true })

    //To get no. of documents
    //const courses = await Course.find({ author: "Mosh", isPublished: true }).limit(10).sort({ name: 1 }).count();

    //Pagination
    // const pageNumber = 2;
    // const pageSize = 10;

    // await Course.find({ author: "Mosh", isPublished: true }).skip((pageNumber - 1) * pageSize).limit(pageSize).sort({ name: 1 }).count();


    const courses = await Course.find({ author: "Mosh", isPublished: true }).limit(10).sort({ name: 1 }).select({ name: 1, tags: 1 }); // 1 in sort is ascending -1 is descending --- 1 in select is select only that property
    console.log(courses)
}

async function updateCourse(id) {
    //Two approach to update a document in MongoDb
    //Approach 1 : Query First
    //fincById()
    //Modify its properties 
    // save

    // const course = await Course.findById(id)
    // if (!course) console.log(course);
    // course.isPublished = true;
    // course.author = "Another Author";
    // // or use course.set()
    // //course.set({ isPublished: true, author: "Another Author" })
    // const result = await course.save();

    // console.log(result);


    //Approach 2: Update First
    //Update Directly
    //Optionally get updated documents as well

    const result = await Course.update({ _id: id }, {
        $set: {
            author: "Nitesh",
            isPublished: false
        }
    })
    console.log(result)
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id })
    console.log(result)
}

//removeCourse("5a68fde3f09ad7646ddec17e")

// getCourses()

createCourse()



