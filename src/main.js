// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引用router目录下的index.js路由
import router from './router'
//引用jquery库
import $ from 'jquery'
//引入lib-flexible/flexible
import 'lib-flexible/flexible'
//移动端的 touch 事件，没有监听桌面端的 mouse 事件； @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用
import '@vant/touch-emulator';
//import "./assets/rem.js" //rem
//引入vant组件，此项目基于vue 2 开发，因此使用Vant 2 版本ui
import { Button } from 'vant'
Vue.use(Button)
//Layout 布局
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
//Popup 弹出层：弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示
import { Popup } from 'vant';
Vue.use(Popup);
//Toast 轻提示：在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
//引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。例如：this.$toast('提示文案');
import { Toast } from 'vant';
Vue.use(Toast);
//Loading 加载 加载图标，用于表示加载中的过渡状态
import { Loading } from 'vant';
Vue.use(Loading);
//Dialog 弹出框
import { Dialog } from 'vant';
Vue.use(Dialog);
//Field 输入框
import { Field } from 'vant';
Vue.use(Field);
//Cell 单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
import { Form } from 'vant';
Vue.use(Form);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
//Search 搜索
import { Search } from 'vant';
Vue.use(Search);
import { List } from 'vant';
Vue.use(List);
import { Overlay } from 'vant';
Vue.use(Overlay);
import { Picker } from 'vant';
Vue.use(Picker);
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
//Icon 图标
import { Icon } from 'vant';
Vue.use(Icon);
//滚动条的插件
import vuescroll from 'vuescroll';
Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};
import { RadioGroup, Radio } from 'vant';
Vue.use(Radio);
Vue.use(RadioGroup);
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

/*
router.beforeEach((to, from, next) => {
  //路由发生变化修改页面title 
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0); // 跳转到新页面 页面滚动到顶部；
  next();
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //一定要注入到vue的实例对象上
  router,
  components: { App },
  template: '<App/>'
})


