<template>
  <div
    class="contenteditable"
    contenteditable="true"
    v-html="content"
    @blur="handleEditor"
    @click="handleClick($event)"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      content: `<span contenteditable="false" style="color: red; cursor:pointer;" onclick="console.log('被点击')" data-linkurl="www.baiduccc.com" data-linkname="短链接1">短链接1</span>纯文本内容<span contenteditable="false" style="color: red; cursor:pointer;" onclick="console.log('被点击')" data-linkurl="www.baiduccc.com" data-linkname="短链接1">短链接1</span>纯文本内容`,
    }
  },
  methods: {
    handleEditor($event) {
      console.log('[ $event.target.innerText ]', $event.target.innerHTML)
    },
    handleClick($event) {
      console.log('[ $event ]', $event)
      let tagPathLinkUrl = $event.target.dataset.linkurl
      let tagPathLinkName = $event.target.dataset.linkname
      console.log('[ tagPath ]', tagPathLinkUrl)
      console.log('[ tagPathLinkName ]', tagPathLinkName)
      console.log("getSelection()", getSelection())
    },
  },
  watch: {
    text() {
      console.log('[ text ]', text)
    },
  },
}
</script>

<style lang="scss" scoped>
.contenteditable {
  border: 1px solid #e1e4e8;
  border-radius: 2px;
  width: 300px;
  height: 100px;
  padding: 15px;
}
</style>
