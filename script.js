const items = document.querySelectorAll('item');
items.forEach(item => {
  items.addEventListener('mouseover', () => {item.classList.add('selected');
})
})