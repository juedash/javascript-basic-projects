// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector('.nav-toggle');
const linksList = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
  //   if (linksList.classList.contains('show-links')) {
  //     linksList.classList.remove('show-links');
  //   } else {
  //     linksList.classList.add('show-links');
  //   }
  linksList.classList.toggle('show-links');
});
