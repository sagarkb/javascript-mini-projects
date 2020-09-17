const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2021';

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const difference = Math.floor((newYearDate - currentDate) / 1000);
  const days = Math.floor(difference / 3600 / 24);
  const hours = Math.floor((difference / 3600) % 24);
  const minutes = Math.floor((difference / 60) % 60);
  const seconds = Math.floor(difference % 60);

  dayEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
