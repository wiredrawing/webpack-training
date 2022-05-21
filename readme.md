

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


## 6.ES6形式の記述をES5相当に変換するBabelをインストールする

```
npm install --save-dev -D @babel/core @babel/preset-env

```

上記モジュールをインストール後
Webpackコマンドでjavascriptなどをバンドルする際に
ES6 => ES5 に変換する処理を同時に行って網羅ため
webpack.config.js ファイルを以下ののように修正する


```webpack.config.js
module .exports = {
  entry: "./src/index.js",
  mode: "development",
  // 以下のmoduleというプロパティを追加する
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }]
  },
  // webpackされたjavascript保存先
  // 静的ファイルのindex.htmlには scritpタグで以下で出力される main.jsを読み込む
  // ※例) <script src="main.js"></script>
  output: {
    // filenameだけを指定する場合は
    // 同階層にあるdistディレクトリが出力先になる
    filename: "./src/main.js",
    // 個別にpathプロパティを付与すると個別に出力先ディレクトリを変更できる
    path: __dirname + "/dist"
  },

  devServer: {
    // webpack-dev-serverのルートディレクトリを指定する
    // index.htmlは以下で指定したディレクトリに配置する
    static: "dist",
    open: true,
  }
};
```

## 7.ソースマップの設定を追加する

上記までの設定でwebpackのビルドを実行すると
トランスパイルされたソースコードがデフォルトだとevalコマンドで
実行されるためソースコードが見にくい.
そのためソースマップの設定を行って比較的見やすい形で
トランスパイルさせる.


```webpack.config.js

module .exports = {
  // ...
  // ソースマップ
  devtool: 'inline-cheap-module-source-map'
  // ....
};

```

上記の devtoolというプロパティの設定を追加してやることで
比較的見やすいソースにトランスパイルできる