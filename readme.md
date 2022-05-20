

# node.jsで javascript開発をする場合の手順


## 1.nodeプロジェクトの初期化

```

# 空っぽのnpmプロジェクトを作成する
npm init -y 

```

```output.json
// 以下出力内容

{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

## 2.webpackを使ったjavascript開発に必要なモジュールをインストールする

```
npm install -D  webpack webpack-cli webpack-dev-server
```

## 3.package.jsonのscriptを修正する

**ターミナル上でコマンド npm run start で webpack-dev-serverが起動するように修正する**

```package.json

{
  // sampele
  "scripts": {
    // デフォルトで記述されているコマンド
    "test": "echo \"Error: no test specified\" && exit 1",
    // webpack-dev-server を起動するためのコマンドを追記
    "start": "webpack serve",
    // production用に作成したjavascriptをバンドルするコマンド
    "build": "webpack --mode production",
    // development用に作成したjavascriptをバンドルするコマンド
    "dev": "webpack --mode development"
  }
  // ....
} 

```

**上記のように"scripts"の箇所を修正したら保存して以下のコマンドを実行する**

```
npm run start

```
上記コマンドでwebpack-dev-serverによるローカルサーバーが起動すればOK
※だたし必須ファイルが存在しないのでコンソールにエラーが出る

## 4.webpackによる出力先の設定をする

```webpack.config.js

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  // webpackされたjavascript保存先
  // 静的ファイルのindex.htmlには scritpタグで以下で出力される main.jsを読み込む
  // ※例) <script src="main.js"></script>
  output: {
    // 以下のようにした場合は ./dist/main.js というパスに出力される
    // javascript自体は http://localhost:port/main.js で出力される
    filename: "main.js",
    // 以下の場合は  ./dist/src/main.js というパスに出力される
    // filename: "./src/main.js",
  },

  devServer: {
    // webpack-dev-serverのルートディレクトリを指定する
    // index.htmlは以下で指定したディレクトリに配置する
    static: "dist",
    open: true,
  }
};

```
上記のような webpack設定用のjavascriptファイルを作成する


## 5.webpack-dev-serverを使ったjavascript開発用ローカルサーバーを起動する

```
# package.jsonに記述した npmコマンドを実行する

npm run start
# npmがバッググランドで `webpack serve` を実行する
```

上記コマンドを実行すると
http://localhost:8080 が ローカルサーバーとして起動する