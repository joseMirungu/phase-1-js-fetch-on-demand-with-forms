document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
  
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const searchInput = document.getElementById("searchByID").value;
      const movieDetailsSection = document.getElementById("movieDetails");
  
      try {
        const response = await fetch(`http://localhost:3000/movies/${searchInput}`);
        if (!response.ok) {
          throw new Error('Movie not found!');
        }
        const movie = await response.json();
  
        // Update movie details in the DOM
        movieDetailsSection.querySelector("h4").innerText = movie.title;
        movieDetailsSection.querySelector("p").innerText = movie.summary;
      } catch (error) {
        console.error('Error fetching movie:', error);
        // Optionally clear previous movie details if search fails
        movieDetailsSection.querySelector("h4").innerText = '';
        movieDetailsSection.querySelector("p").innerText = 'Movie not found!';
      }
    });
  });
  