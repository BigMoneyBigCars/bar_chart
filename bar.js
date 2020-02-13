"use strict";

window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  console.log("Init function");
  setHeights();
  randomNumber();
}

// make array of 40

const array = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40"
];

function randomNumber() {
  let random = Math.floor(Math.random() * 32);
  console.log(random);
}

function one() {
  // get number in queue
}

function setHeights() {
  // find the first bar

  document.querySelectorAll(".bars").forEach((bar, i) => {});

  for (let i = 0; i < array.length; i++) {
    let bar;
    bar = document.querySelector(`#container > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", array[i]);
  }
}

// wait 1 sec

function two() {
  //add to the end of array
}

function three() {
  // remove first element in array
}

function four() {
  // show array
  // repeat to wait 1 sec / function 1
}
