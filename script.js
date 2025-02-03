// List of public domain movies
const movies = [
    { title: "Movie 1", url: "movie1.mp4" },
    { title: "Movie 2", url: "movie2.mp4" },
    { title: "Movie 3", url: "movie3.mp4" }
];

// Function to display movies
function loadMovies() {
    let container = document.getElementById("videoContainer");
    container.innerHTML = "";
    
    movies.forEach(movie => {
        let videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <h3>${movie.title}</h3>
            <video controls>
                <source src="${movie.url}" type="video/mp4">
                Your browser does not support video playback.
            </video>
        `;
        container.appendChild(videoCard);
    });
}

// Function to search movies
function searchMovies() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    
    let container = document.getElementById("videoContainer");
    container.innerHTML = "";
    
    filteredMovies.forEach(movie => {
        let videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <h3>${movie.title}</h3>
            <video controls>
                <source src="${movie.url}" type="video/mp4">
                Your browser does not support video playback.
            </video>
        `;
        container.appendChild(videoCard);
    });
}

// Load movies on page load
window.onload = loadMovies;
    
