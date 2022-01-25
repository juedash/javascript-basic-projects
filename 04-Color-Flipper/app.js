const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomIndex = getRandomNumber();
  color.textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
