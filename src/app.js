const { addMovie } = require("./utils")

const returnValue = addMovie({title: "Spiderman", actor: "Tobey Maquire" });
// accept at least movie title on command line

const newValue = addMovie({year: 2002})

returnValue.year = 2002

console.log(returnValue)

const movie = [
    {
    name: "Titanic",
    director: "James Cameron",
    }
];

movie.year = 2007;

console.log(movie)
