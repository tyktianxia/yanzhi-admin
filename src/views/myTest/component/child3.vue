<script setup lang="ts">
import { ElButton } from "element-plus";
import { h } from "vue";
let props = defineProps({
  testHtml: String,
});
console.log(props.testHtml);
</script>

<script lang="ts">
export default {
  render() {
    return h("div", {
      innerHTML: this.testHtml,
    });
  },
  // mounted(){
  //   console.log(props.testHtml)
  // },
  props:{
    "testHtml":{
      type:String
    }
  },
  methods: {
    testHtmlClick() {
      console.log("testHtmlClick");
    },
  },
};
</script>
