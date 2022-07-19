# mess20.github.io/easychat.js

用于DOLLARS聊天室的简易脚本，方便小白使用。

## 使用方法
- 电脑端

F12 → console 输入以下代码：

```
var script = document.createElement('script');
script.src = "https://mess20.github.io/easychat.js";
$('head')[0].appendChild(script);
```

- 手机端

部分浏览器可以使用。

开发者工具 → console 输入上述代码。

## 唤起
按右下角绿色按钮即可。

## 功能
#### 自动续房
采用每10分钟报时一次的方法实现。

#### 自动小字
按post键发言自动小字；键盘直接发送不变。

#### 进房提示
有人进房会弹出“Someone entered room.”消息框。

注意：开启该功能后，有人进房后才能关闭该功能。

#### 更换背景

注意：
- 图片大小尽量与屏幕大小一致。
- URL格式有误不会报错。

#### 更改字体
更改 font-family。

已知手机端可显示字体：
- sans-serif（网站所设聊天字体类型）
- times
- monospace

#### 字体大小
更改 font-size。

网站所设聊天字体大小为 16px。












