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

