import $ from "jquery"
export function hello()
{
  console.log("hello 関数をimportして実行")
}


$(function () {



  console.log("hello.jsモジュール内でjqueryの$イベントを実行");
});


