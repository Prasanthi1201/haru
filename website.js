const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('searchbar');
const products = ['ps-5', 'ps-4', 'headphones', 'console'];

searchIcon.addEventListener('click', function() {
  const userInput = searchInput.value.toLowerCase();
  
  if (products.includes(userInput)) {
    window.location.href = 'products.html';
  }
  searchInput.value = ''; // Reset the search bar
});