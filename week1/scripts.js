let hongikFestival = {
  name: "대동제",
  date: "2026.05.13-2026.05.15",
  location: "홍익대학교",
  lineup: {
    day1: ["다이나믹듀오", "드래곤포니"],
    day2: ["백예린", "코르티스"],
    day3: ["프로미스나인", "로꼬, 그레이, 우원재"],
  },
};

// 모든 section 태그를 찾는다.
let sectionTag = document.querySelectorAll("section");

//날짜 섹션에 추가
let dateTag = document.createElement("p");
dateTag.innerText = hongikFestival.date;
sectionTag[0].appendChild(dateTag);

//라인업 섹션에 추가
let h3Tag = document.querySelectorAll("h3");

let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1[0];
h3Tag[0].after(dynamicDuoTag); //h3Tag 안에 포함되지 않는다.
let dynamicDuoImg = document.createElement("img");
dynamicDuoImg.src = "dynamic-duo.jpg";
dynamicDuoImg.alt = "다이나믹듀오";
h3Tag[0].after(dynamicDuoImg);

let dragonPonyTag = document.createElement("p");
dragonPonyTag.innerText = hongikFestival.lineup.day1[1];
h3Tag[0].after(dragonPonyTag);
let dragonPonyImg = document.createElement("img");
dragonPonyImg.src = "dragon-pony.jpg";
dragonPonyImg.alt = "드래곤포니";
h3Tag[0].after(dragonPonyImg);

let baekYerinTag = document.createElement("p");
baekYerinTag.innerText = hongikFestival.lineup.day2[0];
h3Tag[1].after(baekYerinTag);
let baekYerinImg = document.createElement("img");
baekYerinImg.src = "baek-yerin.jpg";
baekYerinImg.alt = "백예린";
h3Tag[1].after(baekYerinImg);

let cortisTag = document.createElement("p");
cortisTag.innerText = hongikFestival.lineup.day2[1];
h3Tag[1].after(cortisTag);
let cortisImg = document.createElement("img");
cortisImg.src = "cortis.jpg";
cortisImg.alt = "코르티스";
h3Tag[1].after(cortisImg);

let fromise9Tag = document.createElement("p");
fromise9Tag.innerText = hongikFestival.lineup.day3[0];
h3Tag[2].after(fromise9Tag);
let fromise9Img = document.createElement("img");
fromise9Img.src = "fromise9.jpg";
fromise9Img.alt = "프로미스나인";
h3Tag[2].after(fromise9Img);

let loccoTag = document.createElement("p");
loccoTag.innerText = hongikFestival.lineup.day3[1];
h3Tag[2].after(loccoTag);
let loccoImg = document.createElement("img");
loccoImg.src = "locco-gray-woo.jpg";
loccoImg.alt = "로꼬, 그레이, 우원재";
h3Tag[2].after(loccoImg);
