export class MyClass {
  constructor(a) {
    console.log("MyClass※独自クラス")
    console.log(a);
  }
}


export class SubClass extends MyClass {
  constructor(a) {
    console.log("SubClassのコンストラクタを実行")
    super(a);
  }
}


let privateValue = "プライベートvalue";

export function accessor() {
  console.log("accessor");
  console.log(privateValue);
}

window.addEventListener("load", function (e) {

  console.log("----------------------------------------");
  let imageList = document.getElementsByTagName("img");
  let imageListArray = Array.from(imageList);
  console.log(imageList);
  console.log(imageListArray);
  imageListArray.forEach(function (value, index) {
    console.log(index);
    console.log(value);
    console.log(value.currentSrc);
  });
  console.log(imageList);
})

window.addEventListener("load", function (e) {
  console.log("window.addEventListener");
  console.log("myclass.js");
  console.log(e);
});
