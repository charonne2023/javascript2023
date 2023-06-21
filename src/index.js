const clockTitle = document.querySelector(".js-clock");

function DDayChristmasEve() {
  const christmasEve = new Date(2023, 11, 24, 0, 0, 0);
  let now = new Date();
  let nowUntilChristmas = christmasEve - now;
  const MILLISECTOSEC = 1000;
  const SECONDSTOMINUTE = 1000 * 60;
  const SECONDSTOHOUR = SECONDSTOMINUTE * 60;
  const SECONDSTODAY = SECONDSTOHOUR * 24;

  let days = Math.floor(nowUntilChristmas / SECONDSTODAY);
  let hours = Math.floor((nowUntilChristmas % SECONDSTODAY) / SECONDSTOHOUR);
  let minutes = Math.floor(
    (nowUntilChristmas % SECONDSTOHOUR) / SECONDSTOMINUTE
  );
  let seconds = Math.floor(
    (nowUntilChristmas % SECONDSTOMINUTE) / MILLISECTOSEC
  );

  days = String(days).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

DDayChristmasEve();
setInterval(DDayChristmasEve, 1000);
