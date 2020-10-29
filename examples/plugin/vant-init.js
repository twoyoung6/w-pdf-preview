// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Toast,
  Loading
} from 'vant'

[
  Toast,
  Loading
].forEach(comp => {
  Vue.use(comp)
});

