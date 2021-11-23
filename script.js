const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(setDate, 1000);

setDate();

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds(); // second hand rotation
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  /* secondDegrees--> How the second hand will rotate
1 min = 60sec; so divided with 60
multiplied 360 (because circle is formed by 360 deg) */

  const mins = now.getMinutes(); // minutes hand rotation
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  /* minsDegrees --> How to turn hand of the minute
   Added  sec hand position with min.Because the min's hand is in the right place depending on the second.
  */

  const hour = now.getHours(); // Hours hand rotation
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
