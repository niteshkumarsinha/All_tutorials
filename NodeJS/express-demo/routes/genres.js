const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercise-genres')
    .then(() => console.log("connected to db"))
    .catch(err => console.error("Couldn't connect to MongoDB", err))

const genresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})

const Genre = mongoose.model('genre', genresSchema);

// async function createGenre(id, name) {
//     const genre = new Genre({
//         id: id,
//         name: name,
//     })
//     try {
//         const result = await genre.save();
//         console.log(result)
//     } catch (ex) {
//         console.log(ex)
//     }
// }

// async function getGenre() {
//     const genres = await Genre.find(); // 1 in sort is ascending -1 is descending --- 1 in select is select only that property

// }

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort({ name: 1 });
    res.send(genres);
});


router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        //id: genres.length + 1,
        name: req.body.name
    });
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {

    const genre = await Genre.findByIdAndRemove(req.params.id)
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.get('/:id', async (req, res) => {

    const genre = await Genre.findById(req.params.id)
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;