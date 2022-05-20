

# node.jsで javascript開発をする場合の手順


## 1.nodeプロジェクトの初期化

```angular2html

# 空っぽのnpmプロジェクトを作成する
npm init -y 
```


## 2.webpackを使ったjavascript開発に必要なモジュールをインストールする

```angular2html
npm install -D  webpack webpack-cli webpack-dev-server
```

## 3.package.jsonのscriptを修正する

**ターミナル上でコマンド npm run start で webpack-dev-serverが起動するように修正する**
```
...

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve"
  },
  
...

```
**上記のように"scripts"の箇所を修正したら保存して以下のコマンドを実行する**

```angular2html

npm run start

```
上記コマンドでwebpack-dev-serverによるローカルサーバーが起動すればOK

## 4.webpackによる出力先の設定をする

```webpack.config.js

module .exports = {
  entry: "./src/index.js",
  mode: "development",

  // webpackされたjavascript保存先
  // 静的ファイルのindex.htmlには scritpタグで以下で出力される main.jsを読み込む
  // ※例) <script src="main.js"></script>
  output: {
    filename: "./dist/main.js",
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