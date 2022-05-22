import $ from "jquery";
const DEFINED_VALUE = "定数";
console.log(DEFINED_VALUE);

// アロー関数を作成してES5に
let allowFunction = (s) => {
  console.log(s);
  console.log(this);
}

allowFunction("ES6 => ES5 へ");

// ベースとなるスーパークラス
class Human {

  level = null;
  playTime = null;
  hitPoint = null;
  playerName = "";

  constructor(playerName = "") {
    this.playerName = playerName;
  }

  getLevel() {
    return this.level;
  }

  getHitPoint() {
    return this.hitPoint;
  }

  levelUp() {
    return this.level++;
  }

  static GameTitle() {
    return "gameTitle";
  }
}


class Knight extends Human {
  constructor(defaultLevel, playerName) {
    super(playerName);
    this.level = defaultLevel;
  }
}

// Knightジョブのキャラクターランスロットを作成する
let lancelot = new Knight(10, "lancelot");
console.log(lancelot);
console.log(lancelot.playerName);
console.log(lancelot.levelUp());
console.log(lancelot.getLevel());
console.log(lancelot.levelUp());
console.log(lancelot.getLevel());
console.log(Knight.GameTitle());
console.log($);
console.log($(window));