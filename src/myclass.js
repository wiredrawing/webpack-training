

export class MyClass {
  constructor(a) {
    console.log("MyClass※独自クラス")
    console.log(a);
  }
}


export class SubClass extends  MyClass {
  constructor(a) {
    console.log("SubClassのコンストラクタを実行")
    super(a);
  }
}


let privateValue ="プライベートvalue";
export function accessor (){
  console.log("accessor");
  // console.log(__dirname);
  console.log(privateValue);
}