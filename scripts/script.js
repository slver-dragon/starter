let form = document.getElementById("order-form");
let orderButton = document.getElementById("order-button-desk");
let yourName = document.getElementById("your-name");
let yourPhon = document.getElementById("your-phon");
let apply = document.getElementById("apply");
let current = 0;

yourName.onfocus = function () {
  yourName.classList.remove("error");
};

yourPhon.onfocus = function () {
  yourPhon.classList.remove("error");
};

function validating() {
  yourName.value == ""
    ? yourName.classList.add("error")
    : yourName.classList.remove("error");
  yourPhon.value == ""
    ? yourPhon.classList.add("error")
    : yourPhon.classList.remove("error");
  yourName.value == "" || yourPhon.value == "" || !apply.checked
    ? event.preventDefault()
    : form.submit();
}

form.onsubmit = function () {
  validating();
};

let inputCity = document.getElementById("input-city");
let selectCity = document.getElementById("select-city");

inputCity.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    let newOption = new Option(
      inputCity.value,
      String(selectCity.options.length + 1)
    );
    selectCity.append(newOption);
  }
});

let hiderButton = document.getElementById("hider-button");
let additionService = document.getElementById("addition-service");
hiderButton.onclick = function () {
  hiderButton.classList.toggle("hider-button-active");
  additionService.hidden = additionService.hidden != true;
};

let offerElement1 = document.getElementById("offer-element-1");
let offerElement2 = document.getElementById("offer-element-2");
let offerElement3 = document.getElementById("offer-element-3");

offerElement1.onmouseover = function () {
  offerElement1.classList.add("offer-element-selected");
}

offerElement2.onmouseover = function () {
  offerElement2.classList.add("offer-element-selected");
}

offerElement3.onmouseover = function () {
  offerElement3.classList.add("offer-element-selected");
}

offerElement1.onmouseout = function () {
  offerElement1.classList.remove("offer-element-selected");
}

offerElement2.onmouseout = function () {
  offerElement2.classList.remove("offer-element-selected");
}

offerElement3.onmouseout = function () {
  offerElement3.classList.remove("offer-element-selected");
}
/*function offerBorder() {
  for (j = 1; j < 4; j++) {
    document.getElementById("offer-element-" + j).onmouseover
      ? document
          .getElementById("offer-element-" + j)
          .classList.add("offer-element-selected")
      : 
    document.getElementById("offer-element-" + j).onmouseout
      ?
      document
          .getElementById("offer-element-" + j)
          .classList.remove("offer-element-selected");
  }
}*/

let timerBlock = document.getElementById("timer");
let hours;
let minutes;
let seconds;
let period = 21600;
let timeResult;

timer = setInterval(function () {
  /*offerBorder();*/
  hours = Math.floor((period / 60 / 60) % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = Math.floor((period / 60) % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = Math.floor(period % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (period <= 0) {
    clearInterval(timer);
    timerBlock.className = "timer-end";
    timeResult = "Время вышло";
  } else {
    timeResult = hours + ":" + minutes + ":" + seconds;
  }
  timerBlock.innerHTML = timeResult;
  --period;
}, 1000);

ShareVK = function (purl, ptitle, pimg, text) {
  url = "http://vkontakte.ru/share.php?";
  url += "url=" + encodeURIComponent(purl);
  url += "&title=" + encodeURIComponent(ptitle);
  url += "&image=" + encodeURIComponent(pimg);
  url += "&description=" + encodeURIComponent(text);
  url += "&noparse=true";
  window.open(url, ptitle);
};

ShareFB = function (purl, ptitle, pimg, text) {
  url = "http://www.facebook.com/sharer.php?s=100";
  url += "&p[title]=" + encodeURIComponent(ptitle);
  url += "&p[summary]=" + encodeURIComponent(text);
  url += "&p[url]=" + encodeURIComponent(purl);
  url += "&p[images][0]=" + encodeURIComponent(pimg);
  window.open(url, ptitle);
};

let elementForward = document.getElementById("elementForward");
let elementBack = document.getElementById("elementBack");
let tekElement1 = document.getElementById("gazel");
let tekElement2 = document.getElementById("kabluk");
let tekElement3 = document.getElementById("gruzov");

let transport = [
  [
    "gazel",
    "Газель 3 метра",
    "Ширина 2 м",
    "Высота 2 м",
    "Объем 16 м³",
    "Грузоподъемность 1,5 т",
    "img/gazel.png",
  ],
  [
    "kabluk",
    "Каблук 2 метра ",
    "Ширина 1.8 м",
    "Высота 1.2 м",
    "Объем 8 м³",
    "Грузоподъемность 0.8 т",
    "img/kabluk.png",
  ],
  [
    "gruzov",
    "Грузовик 3 метра",
    "Ширина 3 м",
    "Высота 3 м",
    "Объем 20 м³",
    "Грузоподъемность 2 т",
    "img/gruzovik.png",
  ]
];

elementForward.onclick = function () {
  current > transport.length - 2 ? elementReplace(0) : elementReplace(current + 1);
};

elementBack.onclick = function () {
  current == 0 ? elementReplace(transport.length - 1) : elementReplace(current - 1);
};

tekElement1.onclick = function () {
  elementReplace(0);
}

tekElement2.onclick = function () {
  elementReplace(1);
}

tekElement3.onclick = function () {
  elementReplace(2);
}

function elementReplace (newEl) {
  document.getElementById(transport[current][0]).className = "car-type";
  current = newEl;
  document.getElementById(transport[current][0]).className = "car-type-active";
  for (let i = 1; i < transport[0].length - 1; i++) {
    document.getElementById("transport-" + i).innerHTML = transport[current][i];
  }
  document.getElementById("transport-picture").src = transport[current][6];
}

