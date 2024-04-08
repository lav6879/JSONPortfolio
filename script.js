
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


document.addEventListener("DOMContentLoaded", function() {
  var nameContainer = document.querySelector('.name-container');
  var letters = document.querySelectorAll('.letter');

  // Add animate class to trigger animation
  nameContainer.classList.add('animate');

  // Show the name container after animation starts
  nameContainer.style.opacity = '1';
});