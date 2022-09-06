let name1 = prompt(`Kullanıcı adınızı giriniz: `);

let userName = document.querySelector(`#userName`);

userName.innerHTML = `${name1[0].toUpperCase()}${name1.slice(1).toLowerCase()}`;

let clock = new Date();
