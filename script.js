const movies = [
    { title: "Stranger Things", image: "https://i.imgur.com/J5LVHEL.jpg" },
    { title: "Money Heist", image: "https://i.imgur.com/L0FhCxn.jpg" },
    { title: "The Witcher", image: "https://i.imgur.com/z3aKuzb.jpg" },
    { title: "Dark", image: "https://i.imgur.com/5xXvXk9.jpg" },
    { title: "Squid Game", image: "https://i.imgur.com/0FqLM0G.jpg" }
];

const container = document.getElementById('movieContainer');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie.image;
    card.appendChild(img);

    const title = document.createElement('p');
    title.innerText = movie.title;
    card.appendChild(title);

    container.appendChild(card);
});

// Play Button
document.getElementById('playBtn').addEventListener('click', () => {
    alert("Play button clicked! Feature coming soon.");
});
