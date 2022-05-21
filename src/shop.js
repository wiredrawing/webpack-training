



export class Shop {
  shopName = "";
  address = "";
  phoneNumber = "";

  constructor( shopName, address, phoneNumber) {
    this.shopName = shopName;
    this.address = address;
    this.phoneNumber = phoneNumber
  }

  shopName () {
    return this.shopName;
  }
}



let shop = new Shop("店舗名", "住所", "電話番号");

console.log(shop);
console.log(shop.shopName);
shop.shopName = "店舗名をオーバーライド";
console.log(shop.shopName);




export let noneFunction = () => {
  console.log("無名関数をES5に変更する場合");
};