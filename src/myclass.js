

class MyClass {
  constructor(a) {
    console.log("MyClass※独自クラス")
    console.log(a);
  }
}


class SubClass extends  MyClass {
  constructor(a) {
    console.log("SubClassのコンストラクタを実行")
    super(a);
  }
}
