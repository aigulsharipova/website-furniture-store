function openDateTimer() {
  const openDate = new Date('July 15, 2022, 11:00');
  const now = new Date();
  const diff = openDate - now;

  const msInDay = 24 * 60 * 60 * 1000;
}

const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('mouseover', () => {
  removeFocus();
  item.classList.add('selected');
})
removeFocus = () => {
  items.forEach(item => {
    item.classList.remove('selected');
  })
}})