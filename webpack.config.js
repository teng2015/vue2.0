

var webpack = require('webpack');

//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// 在命令行 输入  “PRODUCTION=1 webpack --progress” 就会打包压缩，并且注入md5戳 到 d.html里面
var production = process.env.PRODUCTION;

var plugins = [
  //会将所有的样式文件打包成一个单独的style.css
 

  new ExtractTextPlugin( production ? "css/app.[hash].css" : "css/app.css" , {
      disable: false//,
      // allChunks: true  //所有独立样式打包成一个css文件
    }),
  //new ExtractTextPlugin("[name].css" )
  //自动分析重用的模块并且打包成单独的文件
  new CommonsChunkPlugin(production ? "js/common.[hash].js" : "js/common.js" )
 
];

//发布编译时，压缩，版本控制
if (production) {
  //压缩

  plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false } }));
}


/*
  版本控制
  package.json中的
    "html-webpack-plugin": "^1.6.2",
  模块是把生成的带有md5戳的文件，插入到index.html中。
  通过index.tpl模板，生成 index.html
 */                      
var HtmlWebpackPlugin = require("html-webpack-plugin");
//HtmlWebpackPlugin文档 https://www.npmjs.com/package/html-webpack-plugin
//https://github.com/ampedandwired/html-webpack-plugin/issues/52
// plugins.push( new HtmlWebpackPlugin({
//   filename:'index.html'//会生成d.html在根目录下,并注入脚本
//   // ,template:'index.html'
//   ,inject:true //此参数必须加上，不加不注入
// }));


//获取资源路径
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/js');
console.log(APP_PATH);

module.exports = {
  // devtool: 'cheap-module-source-map',
   entry: ["./src/js/index.js"],
  // entry: [
  //   './src/js/index.js',
  //   './src/js/user.js'
  // ],
  // entry:{
  //   index: "./src/js/index",
  //   user: "./src/js/user"
  // },
  output: {
    path: './dist/',
    publicPath: "/dist/",
    filename: production ? "js/[name].[hash].js" : "js/[name].js"//"build.[hash].js"//[hash]MD5戳   解决html的资源的定位可以使用 webpack提供的HtmlWebpackPlugin插件来解决这个问题
    // filename: '[name].js' // 模版基于上边 entry 的 key
    // ,chunkFilename: "[chunkhash].bundle.js"
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }
      , {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      }
      , {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, // use ! to chain loaders
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  vue: {
    loaders: {
      sass: ExtractTextPlugin.extract("css!sass"),
      css: ExtractTextPlugin.extract("css")
      
    }
  },
  plugins: plugins,
  devtool: 'source-map'

};
