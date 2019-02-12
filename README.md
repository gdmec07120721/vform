# VForm 快捷键表单自定义指令

支持使用Enter快捷键使表单Input顺序聚焦。

## 使用

```js

//引入
import VForm from './directives/vform'

//使用插件
Vue.use(vueForm)


```

```html

<template>
    <div>
        <form v-form>
            <input type="text" name="username" placeholder="请输入用户名">
            <input type="password" name="password" placeholder="请输入密码">
            <input type="password" name="password_again" placeholder="请再次输入密码">
            <a href="javascript:;" data-form-type="submit">注册</a>
        </form>
    </div>
</template>

```

或者，入参一个对象，`sub_key`的值表示提交按钮的自定义属性名，指令会根据传入的属性名获取到提交按钮元素。


```html

<template>
    <div>
        <form v-form="{sub_key: 'data-custom-submit'}">
            <input type="text" name="username" placeholder="请输入用户名">
            <input type="password" name="password" placeholder="请输入密码">
            <input type="password" name="password_again" placeholder="请再次输入密码">
            <a href="javascript:;" data-custom-submit="submit">注册</a>
        </form>
    </div>
</template>

```

## 扩展

### `onkeyup`、`onkeydown`和`onkeypress`事件的了解

onkeypress：用户按下任何字母数字键时触发该事件。系统按钮（例如，箭头键和功能键）无法得到识别。 

onkeyup：用户放开按下的键盘键时触发该事件。 

onkeydown：用户按下任何键盘键（包括系统按钮，如箭头键和功能键）都会触发该事件。

其三者执行顺序分别是`onkeydown` > `onkeypress` > `onkeyup`。








