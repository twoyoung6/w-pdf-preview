// packages/textarea/index.js


// 导入组件，组件必须声明 name
import PdfView from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
PdfView.install = function (Vue) {
  Vue.component(PdfView.name, PdfView)
}

export default PdfView
