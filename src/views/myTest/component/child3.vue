<script setup lang="ts">
import { ElButton } from "element-plus";
import { h } from "vue";

const props = defineProps({
  testHtml: String,
});
console.log(props.testHtml);
</script>

<script lang="ts">
export default {
  // mounted(){
  //   console.log(props.testHtml)
  // },
  props: {
    testHtml: {
      type: String,
    },
  },
  methods: {
    testHtmlClick() {
      console.log("testHtmlClick");
    },
  },
  render() {
    return h("div", {
      innerHTML: this.testHtml,
    });
  },
};
</script>
