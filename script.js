const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    console.log("Clicked!!!")
  })
})