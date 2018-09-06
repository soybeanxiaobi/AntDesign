1.安装依赖
```
npm install -D 依赖包
//react类
react react-dom react-router-dom 

//webpack类
webpack@3.0.0 html-webpack-plugin 

//css类
style-loader css-loader less-loader url-loader less

//babel类
babel-core babel-loader babel-preset-env babel-preset-react babel-preset-es2015

//ant-design类
antd 
```

2.引入antd
```
//终端:
npm install -D antd

//引入界面
import Button from 'antd/lib/button';

//在css(less...sass...)引入antd,否则无样式
@import '~antd/dist/antd.css';
```
但是这时候你会发现,每次打开页面的时候,都会有一点白屏时间,因为antd每次都加载了所有组件

按需加载antd
新建.babelrc文件,在babel编译的时候会自动读取
```
{
	"plugins": [
		[
            "import",
            {
            "libraryName": "antd",
            "style": "css"
            }
        ]
	]
}
```
重新打包一下,```npm run build```
//配置好之后就可以直接import了
import { Button } from 'antd'
而<font color="red">style.less</font>的
```@import '~antd/dist/antd.css';```
也可以注释掉了




