<template>
  <div class="view" v-if="url">
    <div class="pdf">
      <pdf
        ref="pdf"
        :src="url"
        v-for="index in numPages"
        :key="index"
        :page="index"
        @page-loaded="pageLoaded($event)"
      ></pdf>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "PdfView",
  components: { pdf },
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      toast: null,
      show: false,
      hasLoaded: false,
      loadMessage: "文档加载中...",
      numPages: null, // pdf 总页数
      curPageNum: 0,
    };
  },
  watch: {
    curPageNum: {
      handler: function (val) {
        if (this.numPages == val) {
          this.toast.clear(); // 当最后加载完的页面数等于 总页面数 清除 toast
        }
      },
    },
  },
  methods: {
    // 某一个 pdf 加载成功回调
    pageLoaded(num) {
      // num 为 当前加载完的页面数
      this.curPageNum = num;
    },
    // 计算pdf页码总数(显示同一pdf文档的多个页面)
    getNumPages() {
      this.hasLoaded = false;
      this.toast = this.$toast({
        type: "loading",
        loadingType: "spinner",
        duration: 0,
        overlay: true,
        message: this.loadMessage,
        forbidClick: true,
      });
      const loadingTask = pdf.createLoadingTask(this.url);
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages;
          this.$nextTick(() => {
            this.hasLoaded = true;
          });
        })
        .catch((err) => {
          this.loadMessage = "文档加载失败";
          this.hasLoaded = false;
        });
    },
  },
  mounted() {
    if (!this.url) {
      this.$toast({
        type: "fail",
        duration: 0,
        message: "请传入 URL",
      });
      return;
    }
    this.getNumPages();
  },
};
</script>

<style>
</style>