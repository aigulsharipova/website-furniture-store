function openDateTimer() {
  const openDate = new Date('July 8, 2022, 20:29');
  const now = new Date();
  const diff = openDate - now;

  const msInDay = 24 * 60 * 60 * 1000;
  const displayDay = Math.floor(diff/msInDay);
  document.querySelector('.days').textContent = displayDay;
  
  const displayHours = Math.floor((diff%msInDay) / msInHour);
  document.querySelector('.hours').textContent = displayHours;

  const displayMin = Math.floor((diff%msInHour) / msInMinute);
  document.querySelector('.minutes').textContent = displayMin;

  if (diff <= 0) {
    document.querySelector('.days').textContent = 0;
    clearInterval(timerId);
    startDate();
  }
}

let timerId = setInterval(openDateTimer, 1000);

function startDate() {
  const heading = document.querySelector('.heading');
  heading.textContent = "WE ARE FINALLY OPEN!!!";
  heading.classList.add('.red');
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