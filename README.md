# wechat_wending
### 微信小程序做一个柠檬树摄影的页面交互
#### 先上效果动态图
#### 个人信息<br>
![微信个人信息](https://github.com/chocolate1/wechat_wending/blob/master/image/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AFGIF.gif)
#### 预约<br>
![微信预约](https://github.com/chocolate1/wechat_wending/blob/master/image/%E5%BE%AE%E4%BF%A1%E9%A2%84%E7%BA%A6GIF.gif)
## 微信上的滑动模块
#### 微信官方网站上有这个组件叫做sroll-view 你可以直接进行引用他的wxml，但是有个问题是你的css里scroll-view中需写入 white-space: nowrap;(强制换行即文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。)而且拖动的元素需在一行内，使用inline-block即可。
