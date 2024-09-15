const timeCounterTitle = document.getElementById("time-counter-title");
const timeCounterAnnounce = document.getElementById("time-counter-announce");
const initialDate = new Date(2024, 5, 15);

const onLoad = () => {
  const today = new Date();
  let months = (today.getFullYear() - initialDate.getFullYear()) * 12;
  months += today.getMonth() - initialDate.getMonth();

  if(today.getDate() === 15) {
    timeCounterAnnounce.innerHTML = `¡Hoy cumplimos un mes más Mi Belen!`;
  }

  timeCounterTitle.innerText += ` ${months} meses`;

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  });
};

window.addEventListener("DOMContentLoaded", onLoad);
