const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
  item.classList.add('selected');
  removeFocus();
})
})
