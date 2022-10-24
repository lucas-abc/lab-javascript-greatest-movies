// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(element => element.director)
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const directorMovies = moviesArray.filter(currentMovie => currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama"));
    return directorMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const scoredMovies = moviesArray.filter(currentMovie => currentMovie.score);
    const totalScore = scoredMovies.reduce((previousMovie, currentMovie) => previousMovie + currentMovie.score, 0) / moviesArray.length;
    return Number(totalScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(currentMovie => currentMovie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray];
    const orderedMoviesArray = newMoviesArray.sort(function (previousMovie, currentMovie) {
        if (previousMovie.year !== currentMovie.year) {
            return previousMovie.year - currentMovie.year;
        } else {
            if (previousMovie.title < currentMovie.title) {
                return -1;
            }
            if (previousMovie.title > currentMovie.title) {
                return 1; 
            }
            if (previousMovie.title === currentMovie.title) {
                return 0;
            }
        }
    })
    return orderedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArray = [...moviesArray];
    const orderedMoviewsArray = newMoviesArray.map(currentMovie => currentMovie.title)
    const printMoviesArray = orderedMoviewsArray.sort(function (previousMovie, currentMovie) {
        if (previousMovie < currentMovie) {
            return -1;
        }
        if (previousMovie > currentMovie) {
            return 1; 
        }
        if (previousMovie === currentMovie) {
            return 0;
        }
    })
    return printMoviesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
