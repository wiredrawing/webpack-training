import $ from "jquery"
export function hello()
{
  console.log("hello 関数をimportして実行")
}


$(function () {


  // input タグの内容を取得する
  let shopName = $("input[name='shopName']").val();
  console.log(shopName);
  $("input[name='shopName']")[0].addEventListener("change", function(e) {
    console.log(e);
    $("#shop-name").html(e.target.value);
  });


  console.log("hello.jsモジュール内でjqueryの$イベントを実行");
});


