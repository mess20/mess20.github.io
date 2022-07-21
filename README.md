# mess20.github.io/easychat.js

用于DOLLARS聊天室的简易脚本，方便小白使用。

## 效果图

![](http://i.miaosu.bid/data/f_31711428.jpg)

## 使用方法
- 电脑端

“F12”键 → console 输入以下代码：

```
var script = document.createElement('script');
script.src = "https://mess20.github.io/easychat.js";
$('head')[0].appendChild(script);
```

- 手机端

部分浏览器可以使用。

选择“开发者工具” → console 输入上述代码。

## 唤起
按右下角绿色按钮即可。

## 功能

#### 上传图片
提供几个图床网站的链接，点击网站名即跳转。


#### 自动续房
采用每10分钟报时一次的方法实现。

#### 自动小字
按post键发言自动小字；键盘直接发送不变。

#### 进房提示
有人进房会弹出“Someone entered room.”消息框。

注意：开启该功能后，有人进房后才能关闭该功能。

#### 更换背景
更换聊天背景为指定图片。提供输入图片URL和上传本地图片两种方式。

注意：
- 图片大小尽量与屏幕大小一致。
- URL格式有误不会报错。

#### 更改字体
更改聊天界面字体（font-family）。

- 可同时填多种字体类型，例：`Tahoma,Arial,sans-serif`

已知手机端可显示字体：
- sans-serif（网站所设聊天字体类型）
- times
- monospace

#### 字体大小
更改聊天字体大小（font-size）。

网站所设聊天字体大小为 16px。

#### 字体颜色
更改聊天字体颜色。

可填颜色模式：
- 自然语言 例：`black`
- HEX 例：`#000000`
- RGB、RGBA 例：`rgb(0,0,0)`，`rgba（0,0,0,1）`
- HSL、HSLA 例：`hsl(0,100%,50%)`，`hsla(0,100%,50%,1)`



















