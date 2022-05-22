
import $ from "jquery";
let QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;






let config = {};

let delta = {
  ops: []
}
let converter = new QuillDeltaToHtmlConverter(delta.ops, config);


let html = converter.convert();

console.log(html);


$(function () {
  $("#quill").html(html);
});

import Quill from "quill";
console.log("quill");
console.log(Quill.import('formats/header'));
let Header = Quill.import('formats/header');
class Header2 extends Header {
}
Header2.className = "__custom__";
console.log(Header2.tagName);
console.log(Header2.className);
Quill.register({"formats/header": Header2});
console.log(Quill.import('formats/header').className);
console.log("quill");


let SizeClass = Quill.import("formats/size");
console.log("SizeClass --->", SizeClass, SizeClass.whitelist, "===========>");

SizeClass.whitelist.push("sp");
SizeClass.whitelist.push("marker");
SizeClass.whitelist.push("header-a");
SizeClass.whitelist.push("header-b");
console.log(SizeClass);
Quill.register({"formats/size": SizeClass})
let Image = Quill.import("formats/image");

class Image2 extends  Image {


  static create(value) {
    // 静的メソッドのオーバーライド
    let node = super.create(value);
    if (typeof value !== 'string') {
      node.setAttribute('alt', value.alt);
      node.setAttribute('src', value.url);
    }
    node.addEventListener("dblclick", function (e) {
      let currentAlt = e.target.getAttribute("alt");
      if (!currentAlt) {
        currentAlt = '';
      }
      let altAttribute = window.prompt("プロンプトメッセージ", currentAlt);
      if (altAttribute) {
        node.setAttribute("alt", altAttribute);
      } else {
        node.setAttribute("alt", e.target.getAttribute("alt"));
      }
    });
    return node;
  }
}
Quill.register({"formats/image": Image2});
window.addEventListener("load", function (e) {
  var options = {
    debug: 'info',
    modules: {
      toolbar: [
        ["image"],
        [{
        size: [
          "sp",
          "marker",
          "header-a",
          "header-b",
          "aaa"
        ]
        }]
      ],
    },
    placeholder: 'Compose an epああああああああああああああああああああic...',
    readOnly: false,
    theme: 'snow'
  };
  var editor = new Quill(document.getElementById("editor"), options);
})
