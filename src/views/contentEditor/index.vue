<template>
  <div class="content-editor">
    <h2>ContentEditor</h2>
    <contenteditable></contenteditable>
    <span style="color: red" onclick="console.log('test 测试')">短链接1</span>
  </div>
</template>

<script>
import Contenteditable from './components/contenteditable'
export default {
  components: { Contenteditable },
}
</script>
<style lang="scss" scoped>
.content-editor {
  width: 500px;
  margin: 0 auto;
  div[contenteditable]:empty:not(:focus):before {
    content: attr(placeholder);
    color: #aaa;
  }
}
</style>
