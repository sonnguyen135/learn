const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const items = document.querySelectorAll('.deadline-format h4');
const giveway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');

const futureDay = new Date(2022,2,1,0,0,0,0);
console.log(new Date(),futureDay);
let day = weekdays[futureDay.getDay()];
let date = futureDay.getDate();
let month = months[futureDay.getMonth()];
let year = futureDay.getFullYear();
let hour = futureDay.getHours();
let min = futureDay.getMinutes();

function formatTime(time){
  if (time < 10 && time >= 0) 
    return '0' + time;
  return time;
}

function formatHour(hour, minutes){
  if (hour > 11)
    return `${hour} : ${formatTime(minutes)} PM`;
  else
    return `${hour} : ${formatTime(minutes)} AM`;
}

function getRemainTime(today,futureDay){
  let tTime = today.getTime();
  let fTime = futureDay.getTime();

  let t = fTime - tTime;

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">HAPPY NEW YEAR</h4>`;
    return ;
  }
  let oneDay = 1000 * 60 * 60 * 24 ;
  let oneHour = 1000 * 60 * 60 ;
  let oneMinute = 1000 * 60;

  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  let values = [days, hours, minutes, seconds];


  items.forEach((e,i) => {
    e.innerHTML = formatTime(values[i]);
  });
  
}

let countdown = setInterval(function(){getRemainTime(new Date(),futureDay)},1000);
giveway.innerHTML = `new year on ${day}, ${date} ${month} ${year}, ${formatHour(hour,min)}`;