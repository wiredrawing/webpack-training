

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


## 2-1 この時点で webpack-dev-server (開発用ローカルサーバーを起動できる)

**まずこの時点でのディレクトリ構造はおそらく以下のような状態**

```sample.ini

drwxr-xr-x 1 your-name 197609      0  5月 22 14:36 ./
drwxr-xr-x 1 your-name 197609      0  5月 22 14:20 ../
drwxr-xr-x 1 your-name 197609      0  5月 22 14:36 .git/
-rw-r--r-- 1 your-name 197609      7  5月 22 14:36 .gitignore
drwxr-xr-x 1 your-name 197609      0  5月 22 14:36 .idea/
drwxr-xr-x 1 your-name 197609      0  5月 22 14:23 node_modules/
-rw-r--r-- 1 your-name 197609    344  5月 22 14:23 package.json
-rw-r--r-- 1 your-name 197609 101645  5月 22 14:23 package-lock.json

```

**この状態で,対象ディレクトリ上で以下のコマンドを実行する**

```
# 開発用 webpack-dev-serverを起動させる
npx webpack serve
```

**ただし本当の初期状態のままなため以下のような出力となる**

```output.ini

your-name@LAPTOP-2TPQCON4 MINGW64 ~/webpack-test (master)
$ npx webpack serve
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.19:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\your-name\webpack-test\public' directory
assets by status 115 KiB [cached] 1 asset
runtime modules 27.3 KiB 12 modules
orphan modules 18.8 KiB [orphan] 8 modules
cacheable modules 158 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 53.4 KiB
    ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 + 8 modules 25.7 KiB [built] [code generated]
    + 3 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB
    ./node_modules/webpack/hot/dev-server.js 1.59 KiB [built] [code generated]
    + 3 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB
    ./node_modules/html-entities/lib/index.js 7.74 KiB [built] [code generated]
    ./node_modules/html-entities/lib/named-references.js 72.7 KiB [built] [code generated]
    + 2 modules
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in main
Module not found: Error: Can't resolve './src' in 'C:\Users\your-name\webpack-test'
resolve './src' in 'C:\Users\your-name\webpack-test'
  using description file: C:\Users\your-name\webpack-test\package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: C:\Users\your-name\webpack-test\package.json (relative path: ./src)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        C:\Users\your-name\webpack-test\src doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        C:\Users\your-name\webpack-test\src.js doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        C:\Users\your-name\webpack-test\src.json doesn't exist
      .wasm
        Field 'browser' doesn't contain a valid alias configuration
        C:\Users\your-name\webpack-test\src.wasm doesn't exist
      as directory
        C:\Users\your-name\webpack-test\src doesn't exist

webpack 5.72.1 compiled with 1 error and 1 warning in 2821 ms

```

とにかくエラーなく正常起動させるために必要な処理が以下コマンド

```success.ini

# npx webpack serve コマンドを叩いたディレクトリ上で以下コマンドを実行

# webpack-dev-serverのドキュメントルートはデフォルト設定で publicディレクトリとなる
mkdir ./public
touch ./public/index.html

# webpackによってbundleされるjavascriptのエントリーポイントは
# src/index.js
mkdir ./src
touch ./src/index.js

```

上記の作業が終わったあと再度以下のコマンドを実行する

```
# --modeオプションをつけないと一部注意メッセージが表示される
npx webpack serve --mode development

# 正常に作業ができていれば以下のような出力になる

$ npx webpack serve --mode development
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.19:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\your-name\webpack-test\public' directory
asset main.js 240 KiB [emitted] (name: main)
runtime modules 27.3 KiB 12 modules
modules by path ./node_modules/ 158 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 53.4 KiB 12 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB
    ./node_modules/webpack/hot/dev-server.js 1.59 KiB [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.34 KiB [built] [code generated]
    + 2 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB
    ./node_modules/html-entities/lib/index.js 7.74 KiB [built] [code generated]
    ./node_modules/html-entities/lib/named-references.js 72.7 KiB [built] [code generated]
    + 2 modules
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
./src/index.js 1 bytes [built] [code generated]
webpack 5.72.1 compiled successfully in 1445 ms

```


## 3.package.jsonのscriptを修正する

**上記では npx webpack serveとコマンドを実行していたが**
**ターミナル上でコマンド npm run start で webpack-dev-serverが起動するように修正する**



```package.json

{
  // sampele
  "scripts": {
    // デフォルトで記述されているコマンド
    "test": "echo \"Error: no test specified\" && exit 1",
    // webpack-dev-server を起動するためのコマンドを追記
    "start": "webpack serve --mode development",
    // production用に作成したjavascriptをバンドルするコマンド
    "build": "webpack --mode production",
    // development用に作成したjavascriptをバンドルするコマンド
    "dev": "webpack --mode development"
  }
  // ....
} 

```

**では上記の設定でwebpack-dev-serverが起動するかどうかを確認する**

```
# webpack-dev-server の開発用ローカルサーバーを起動させる
npm run start (※ npx webpack serve)

# コマンドを置き換えただけなので問題なく起動するはず...
your-name@LAPTOP-2TPQCON4 MINGW64 ~/webpack-test (master)
$ npm run start

> webpack-test@1.0.0 start C:\Users\your-name\webpack-test
> webpack serve --mode development

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.19:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\your-name\webpack-test\public' directory
asset main.js 240 KiB [emitted] (name: main)
runtime modules 27.3 KiB 12 modules
modules by path ./node_modules/ 158 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 53.4 KiB 12 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB
    ./node_modules/webpack/hot/dev-server.js 1.59 KiB [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.34 KiB [built] [code generated]
    + 2 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB
    ./node_modules/html-entities/lib/index.js 7.74 KiB [built] [code generated]
    ./node_modules/html-entities/lib/named-references.js 72.7 KiB [built] [code generated]
    + 2 modules
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
./src/index.js 1 bytes [built] [code generated]
webpack 5.72.1 compiled successfully in 1075 ms

```

## 4.webpackによる出力先の設定をする

まず,これから開発作業するjavascriptを読み込みたい静的なhtml (index.html)を作成する
デフォルトでは npx webpack serve コマンドを実行した階層上のpublicディレクトリを
webpack-dev-server のルートディレクトリとして動作するのがデフォルトの挙動のようだ.

そのためデフォルトの設定を再現すると 以下のようになる

まず, npm init -y コマンドを実行したディレクトリ上で

```
# webpack用設定ファイルを作成する
touch webpack.config.js

```


```webpack.config.js

module .exports = {
  entry: "./src/index.js",
  mode: "development",
  
  // webpackされたjavascript保存先
  output: {
    // 静的ファイルのindex.htmlには scritpタグで以下で出力される main.jsを読み込む
    // ※例) <script src="/src/main.js"></script>
    filename: "./src/main.js",
    // 仮に filenameプロパティの値を変更した場合は次のようなscriptタグになる
    // ※例) <script src="/main.js"></script>
    filename: "./main.js",
    // 個別にpathプロパティを付与すると個別に出力先ディレクトリを変更できる
    path: __dirname + "/dist"
  },

  devServer: {
    // webpack-dev-serverのルートディレクトリを指定する
    // index.htmlは以下で指定したディレクトリに配置する
    static: "public",
    open: true,
  },
};

```

上記のような webpack設定用のjavascriptファイルを作成する

webpack.config.jsファイルの作成が完了したら
作業ディレクトリ上で以下のようなファイルを作成する


```./public/index.html

<script src="/src/main.js"><script>
html ダミーファイル
```

## 5.webpack-dev-serverを使ったjavascript開発用ローカルサーバーを起動する

```
# package.jsonに記述した npmコマンドを実行する

npm run start
# npmがバッググランドで `npx webpack serve` を実行する
```

上記コマンドを実行すると
http://localhost:8080 が ローカルサーバーとして起動する
作成した index.html の内容が表示されていればOK

## 6.ES6形式の記述をES5相当に変換するBabelをインストールする

ただし,以上の設定はでは
class構文などのES6の比較的新しい文法をそのままバンドルしてしまうため.
古いブラウザでも実行できるようにES6 => ES5 へとトランスパイルさせる.

```
# まずトランスパイラの babelをインストールする
npm install --save-dev -D @babel/core @babel/preset-env babel-loader

```

上記モジュールをインストール後
Webpackコマンドでjavascriptなどをバンドルする際に
ES6 => ES5 に変換する処理を同時に行ってもらうため
webpack.config.js ファイルを以下ののように修正する


```webpack.config.js
module .exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      // javascriptをES5準拠にトランスパイルさせる
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
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
    static: "public",
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


## 8.アロー関数など ES5でブラウザ上では使えないシンタックスも対策するには?

上記までの手順んで
class構文や let 構文などは ES5にしてくれるが アロー関数はアロー関数のままになる
アロー関数もES5に対応させるためには再度 webpack.config.jsを以下のように修正する

```webpack.config.js

module .exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      // javascriptをES5準拠にトランスパイルさせる
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
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
    static: "public",
    open: true,
  },

  // ソースマップ
  devtool: 'inline-cheap-module-source-map',

  // --------------------------------------------------------
  // ここを追加
  // ES5 (IE11など極めて古いブラウザ向けの指定)
  // --------------------------------------------------------
  target: [
    "web",
    "es5"
  ]
};

```

上記のようにtargetプロパティを追加して ["web", "es5"] というような値を設定すると
完全なES5準拠のjavascriptにトランスパイルされる