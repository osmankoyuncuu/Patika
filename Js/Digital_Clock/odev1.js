let name1 = prompt(`Kullanıcı adınızı giriniz: `);

let userName = document.querySelector(`#userName`);

userName.innerHTML = `${name1[0].toUpperCase()}${name1.slice(1).toLowerCase()}`;

function clock() {
  let hours = document.querySelector(`#hours`);
  let minutes = document.querySelector(`#minutes`);
  let seconds = document.querySelector(`#seconds`);
  let day = document.querySelector(`#days`);
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let d = new Date().getDay();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  day.innerHTML = days[d];
}

let interval = setInterval(clock, 100);
