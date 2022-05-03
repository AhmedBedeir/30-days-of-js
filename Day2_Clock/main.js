const secondHand = document.querySelector('.seconde');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hours');
function setTimeNow() {
  const now = new Date();
  const secondes = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondesAngle = secondes / 60;
  const minuteAngel = (secondesAngle + minute) / 60;
  const hourAngle = (minuteAngel + hour) / 12;

  secondHand.style.transform = `rotate(${secondesAngle * 360}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngel * 360}deg)`;
  hourHand.style.transform = `rotate(${hourAngle * 360}deg)`;
}
setInterval(setTimeNow, 1000);
