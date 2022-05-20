module .exports = {
  entry: "./src/index.js",
  mode: "development",

  // webpackされたjavascript保存先
  // 静的ファイルのindex.htmlには scritpタグで以下で出力される main.jsを読み込む
  // ※例) <script src="main.js"></script>
  output: {
    // filenameだけを指定する場合は
    // 同階層にあるdistディレクトリが出力先になる
    filename: "./packed_src/main.js",
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