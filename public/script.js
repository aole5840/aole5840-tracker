// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("movieform");
const  movielist = document.getElementById("movielist");

// HOME SECTION COUNTER

const formButtons = document.querySelector('.form-row input');

let countNum = document.querySelector('.movieCounter');

formButtons.addEventListener('click', countUp);

// Total movies counter
function countUp() {
    countNum.innerHTML++;
}

// Total minutes counter attempt



// Total genres counter attempt
function genreChosen(i) {
    let result = undefined;
    if (i == "Action") {
      result++;
    } else if (i == "Adventure") {
      result++;
    } else if (i == "Anime") {
      result++;
    } else if (i == "Comedy") {
      result++;
    } else if (i == "Crime") {
      result++;
    } else if (i == "Fantasy") {
      result++;
    } else if (i == "Horror/Thriller") {
      result++;
    } else if (i == "Romance") {
      result++;
    } else if (i == "Sci-Fi") {
      result++;
    } else {
      result = "I don't know";
    }
    return result;
  }

  // This section here previews the image when the user uploads an image
const uploadPictureButton = document.querySelector(".photo-upload");

  uploadPictureButton.addEventListener('change', function () {
    displayPicture(this);
  });

// function displays the picture.
 function displayPicture(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById('the-picture').setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
 }


// when the user clicks on the submit button, all data will be displayed.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(form.elements.movieGenre.value)

    addmovie(
        form.elements.myImage.value,
        form.elements.movieName.value,
        form.elements.movieGenre.value,
        form.elements.movieDuration.value,
        form.elements.movieRating.value,
        form.elements.movieDate.value,
        form.elements.movieReview.value
    )
    console.log(movieList)
})

// This function will display the list on the web page
function displayMovie(movie) {

    let item = document.createElement("li");
    item.setAttribute("data-id", movie.id);

    // displays the list in the order provided below
    item.innerHTML = `<p><br><strong>${movie.name}</strong><br><br/>Genre: ${movie.genre}<br>Duration: ${movie.duration}mins<br>Rating: ${movie.rating}/10<br>Date Watched: ${movie.date}<br>Review: ${movie.review}<br><br><br><br></p>`;

    movielist.appendChild(item);

    // Clear the value of the input once the task has been added to the page
    form.reset();

    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task

    // Listen for when the delete button is clicked
    delButton.addEventListener("click", function (event) {

        movieList.forEach(function (movieArrayElement, movieArrayIndex) {
            if (movieArrayElement.id == item.getAttribute('data-id')) {
                movieList.splice(movieArrayIndex, 1)
            }

            // Decrease total movies by 1
            countNum.innerHTML--;
        })

        // Make sure the deletion worked by logging out the whole array
        console.log(movieList)

        item.remove(); // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element

    })


}


// Created an array called movieList. This will be seen on the console as the data entered.
var movieList = [];

// Creates a function called 'addTask'
function addmovie(image, name, genre, duration, rating, date, review) {


    // Creating the object, directly passing in the input parameters
    let movie = {
        image,
        name,
        genre,
        id: Date.now(),
        duration,
        rating,
        date,
        review
    }

    // fetching and parse localStorage value
    let localMovies = JSON.parse(localStorage.getItem('movies'));

    if (localMovies == null) {
        localMovies = [movie];
    } else {
        // Check to see if there is an existing task
        if (localMovies.find(element => element.id === movie.id)) {
            console.log('Task ID already exists');
        } else {
            localMovies.push(task);
        }
    }

    movieList.push(movie);
    displayMovie(movie);

}

// Log the array to the console.
console.log(movieList);