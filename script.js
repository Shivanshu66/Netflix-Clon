const movies = [
  { title: "Extraction", img: "https://m.media-amazon.com/images/M/MV5BY2ZjZTJlYTIt.jpg" },
  { title: "Stranger Things", img: "https://m.media-amazon.com/images/M/MV5BYTcw.jpg" },
  { title: "Money Heist", img: "https://m.media-amazon.com/images/M/MV5BMjQwYz.jpg" },
  { title: "Wednesday", img: "https://m.media-amazon.com/images/M/MV5BZTA2.jpg" },
  { title: "Squid Game", img: "https://m.media-amazon.com/images/M/MV5BZTBl.jpg" },
  { title: "The Witcher", img: "https://m.media-amazon.com/images/M/MV5BM2Q1.jpg" },
  { title: "Dark", img: "https://m.media-amazon.com/images/M/MV5BYjBm.jpg" },
];

// Display movies
const movieRow = document.getElementById('movie-row');
function showMovies(list) {
  movieRow.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.style.backgroundImage = `url(${movie.img})`;
    card.dataset.title = movie.title;
    movieRow.appendChild(card);
  });
}
showMovies(movies);

// Search functionality
const search = document.getElementById('search');
search.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
  showMovies(filtered);
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => document.body.classList.toggle('light'));

// Dynamic banner change on hover
const banner = document.querySelector('.banner');
movieRow.addEventListener('mouseover', e => {
  if (e.target.classList.contains('movie-card')) {
    const img = e.target.style.backgroundImage.slice(5, -2);
    banner.style.backgroundImage = `url(${img})`;
  }
});