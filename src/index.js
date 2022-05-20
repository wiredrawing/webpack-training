import {hello} from "./hello";
import $ from "jquery"
import {MyClass} from "./myclass";

let myClass = new MyClass();

console.log(myClass);

console.log("[start]index.jsの実行開始----->");

console.log("jqueryをnpm経由でインストールして実行");
console.log($);
hello();

class Test {
  constructor() {
    console.log("コンストラクタを実行");
  }
}

let test = new Test();
console.log(test);
window.addEventListener("load", function (e) {
  console.log("htmlの読み込み完了");
  let sampleTag = document.getElementById("sample");
  console.log("----", sampleTag.innerText, "-----");
  console.log(sampleTag);
  console.log("----", sampleTag.innerHTML, "-----");
});


console.log("jqueryを実行");

$(function () {
  alert("npm経由のjqueryを実行");
  console.log($("#sample").html("中身を変更"));
  alert("$(function () {})内の実行完了");
});


console.log("index.jsの実行終了");