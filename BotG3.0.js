Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@ivan-niceman 
SergioChizhikov
/
0667
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
0667/BotG.js /
@SergioChizhikov
SergioChizhikov Работа с любым количеством сайтов
Latest commit fcd7876 1 minute ago
 History
 1 contributor
104 lines (89 sloc)  3.12 KB

// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  bot for Google
// @author       Chizhikov Sergey
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sites = {
  "napli.ru":["10 популярных шрифтов от Google", "Отключение редакций и ревизий", "Вывод произвольных типов записей и полей в WordPress", "Взаимодействие PHP и MySQL.", "Плагины VS Сode", "DevTools"],
  "kiteuniverse.ru":["Kite Universe Россия", "Красота. Грация. Интеллект", "Мастер классы Kite Universe"],
  "motoreforma.com":["мотореформа", "прошивки для CAN-AM", "тюнинг Maverick X3", "тюнинг квадроциклов CAN-AM"]
};
let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];

let btnK = document.getElementsByName("btnK")[0];
let links = document.links;
let googleInput = document.getElementsByName("q")[0];

if (btnK !== undefined) {
  document.cookie = `site=${site}`;
} else if (location.hostname == "www.google.com"){
  site = getCookie("site");
} else {
  site = location.hostname;
}

if (btnK !== undefined) {

  let i = 0;
  let timerId = setInterval(()=> {
    googleInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        btnK.click();
      }, getRandom(200, 500));

    }
  }, 500);


} else if (location.hostname == site) {

  setInterval(()=>{
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 80) {
      location.href = "https://www.google.com/";
    }
    if (links.length == 0) {
      location.href = site;
    }
    if (links[index].href.indexOf(site) !== -1) {
      links[index].click();
    }
  }, getRandom(3000, 5000));
  console.log("Мы на целевом сайте");

} else {
  let nextGooglePage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf(site) !== -1) {
      let link = links[i];
      nextGooglePage = false;
      console.log("Нашел строку " + link);
      setTimeout(()=>{
        link.click();
      }, getRandom(1500, 4000));

      break;
    }
  }//цикл end
  if (document.querySelector(".YyVfkd").innerText == "5") {
    nextGooglePage = false;
    location.href = "https://www.google.com/";
  }
  if (nextGooglePage) {
    setTimeout(()=>{
      pnnext.click();
    }, getRandom(2000, 5000));

  }

}


function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
