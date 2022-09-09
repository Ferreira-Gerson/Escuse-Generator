/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = randomExcuse();
  });
  console.log(randomExcuse);
};
let randomExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * 4);
  let actionIndex = Math.floor(Math.random() * 4);
  let whatIndex = Math.floor(Math.random() * 3);
  let whenIndex = Math.floor(Math.random() * 5);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
