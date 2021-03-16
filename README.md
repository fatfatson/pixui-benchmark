# 用例

## 内存

### 1. DOM同级数量：
- 100个 无样式div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/1.html
- 1000个 无样式div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/2.html
- 100个 宽高100*100 透明 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/3.html
- 1000个 宽高100*100 透明 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/4.html
- 100个 宽高100*100 背景色 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/5.html
- 1000个 宽高100*100 背景色 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/1/6.html

### 2. DOM嵌套深度：
- 100个 无样式div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/1.html
- 1000个 无样式div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/2.html
- 100个 宽高100*100 透明 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/3.html
- 1000个 宽高100*100 透明 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/4.html
- 100个 宽高100*100 背景色 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/5.html
- 1000个 宽高100*100 背景色 div： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/2/6.html

### 3. 不同标签：
- div 带文字 * 1000字（不换行）： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/3/1.html
- text 带文字 * 1000字（不换行）： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/3/2.html
- text 带文字 * 1000字（自动换行）： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/3/3.html
- div 带文字 * 4000字（不换行）： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/3/4.html
- text 带文字 * 4000字（自动换行）： https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/3/6.html

## 4. 重复分配
- 100个div+text，display 每0.1s自动隐藏展开：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/4/1.html
- 100个div+text，add/remove 每0.1s自动隐藏展开：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/4/2.html
- 渲染同样文字组成的文本：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/4/5.html

## 5. 元素是否显然
- 1000个 无样式 div（不挂载）：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/1.html
- 1000个 宽高100*100 背景色 div（不挂载）：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/2.html
- 1000个 无样式 div：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/13.html
- 1000个 宽高100*100 透明 div：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/4.html
- 1000个 宽高100*100 背景色 div：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/5.html
- 1000个 宽高100*100 背景色 div display:none：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/6.html
- 1000个 宽高100*100 背景色 div display:none 5s后再显示：https://cdn-go.cn/WGFE/pixui-benchmark/latest/memory/5/7.html