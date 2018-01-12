# vload

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


### <font color=#C71585>使用方式</font>
```js
// main.js
import vload from 'vload'
Vue.use(vload)

// js
this.$load.show()
this.$load.hide()

// 配置项
// 使用this.$load.show()方法，里面的参数有两种，显示load的文字，默认无
// 【字符串】this.$load.show('加载中...')
// 【对象】this.$load.show({title: 'loading', bgWrap: 'red', background: '#fff', stroke: 'rgba(255,120,12,1)', color: 'white'})

```
###### <font color=#e47128>【可选配置】</font>
设置 | 值 | 解释
----|------|----
title | String  | 加载文字
bgWrap | String  | 蒙版颜色
background | String  | 加载框颜色
stroke | String  | 加载器颜色
color | String  | 文本颜色
