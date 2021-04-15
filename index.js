function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const API_URL = 'https://anapioficeandfire.com/api/books';
  
  fetch(API_URL).then(function(response){
    return response.json();
  }).then(function(json){
    renderBooks(json);
  });
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
