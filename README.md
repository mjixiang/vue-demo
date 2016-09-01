# vue-demo
###使用vuejs库,配合webpack,gulp构建工具搭建的一个单入口文件按需加载的项目模板

#install
```
$ git clone https://github.com/mjixiang/vue-demo.git
$ cd vue-demo
$ npm install  (or 'cnpm install')
$ npm run dev

open  http://localhost:8080
```
#site
site：https://mjixiang.github.io/vue-demo/dist

#解决问题
```
* 缓存

* 页面文件按需加载

* 配置代理模式ajax代理请求项目模拟数据（一个配置决定是请求本地测试数据文件还是服务器接口）

* 区分开发模式（自动检测文件更新重新打包依赖文件，开启本地服务器）和项目文件生成模式（更新修改了的文件版本号，压缩代码）

* 自由配置文件生成目录 (默认`./dist`,可任意修改)
```

#文件结构
>src 
>>api  
>>common  
>>>iconfont  
>>>images  
>>>common.css  
>>>common.js  

>>component  
>>config  
>>>base.config.js  
>>>http_code.config.js  
>>>router.config.js 
>>>webpack.base.config.js  
>>>webpack.build.config.js  
>>>webpack.dev.config.js  

>>service  
>>views  
>>gulpfiles.js  
>>index.html  
>>main.js  

>package.json  
