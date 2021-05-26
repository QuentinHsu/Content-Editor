<template>
  <div class="content-editor-area">
    <div
      class="content-editor"
      contenteditable
      @click="handleOnClick($event)"
      @input="handleOnInput($event)"
      ref="contentEditor"
      @focus="handleOnFocus"
    ></div>
    <div class="add-new-dom" @click="addNewDOM">添加</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      node: null,
      offset: 0,
      linkIndex: 1, // 链接索引
    }
  },
  methods: {
    handleOnClick($event) {
      // 记录因点击事件而改变的光标位置
      const sel = getSelection()
      this.node = sel.anchorNode
      this.offset = sel.anchorOffset
      console.log('[ $event ]', $event)
      // 当点击的是链接 span
      if ($event.target.dataset.linkName) {
      }
    },
    handleOnInput($event) {
      const sel = getSelection()
      this.node = sel.anchorNode
      this.offset = sel.anchorOffset
      console.log('[ $event.target.innerHTML ]', $event.target.innerHTML)
    },
    handleOnFocus() {
      const sel = getSelection()
      this.node = sel.anchorNode
      this.offset = sel.anchorOffset
    },
    addNewDOM() {
      if (!this.node) {
        return
      }
      const span = document.createElement('span')
      span.innerText = '动态链接' + this.linkIndex
      // 设置 data 属性
      span.dataset.linkName = '动态链接' + this.linkIndex
      this.linkIndex++
      span.contentEditable = 'false'
      span.className = 'link-name'

      // 链接的点击事件
      // span.onclick = ($e) => {

      // }
      console.log('[ span ]', span)
      if (this.node.nodeName === '#text') {
        const p = this.node.parentElement
        p.removeChild(this.node)
        if (this.node.nodeValue.slice(0, this.offset).length > 0) {
          const n1 = document.createElement('span')
          n1.innerText = this.node.nodeValue.slice(0, this.offset)
          p.appendChild(n1)
        }
        p.appendChild(span)
        if (this.node.nodeValue.slice(this.offset).length > 0) {
          const n2 = document.createElement('span')
          n2.innerText = this.node.nodeValue.slice(this.offset)
          p.appendChild(n2)
        }
      } else {
        this.node.parentElement.appendChild(span)
      }
    },
  },
  mounted() {
    this.$refs['content-editor']
    console.log("[ this.$refs['contentEditor'] ]", this.$refs['contentEditor'])
    console.log('[ this.$refs ]', this.$refs)
    this.$refs['contentEditor'].focus()
  }
}
</script>

<style lang="scss">
.content-editor-area {
  .content-editor {
    width: 400px;
    min-height: 100px;
    padding: 10px;
    border: 1px solid #e1e4e8;
    .link-name {
      background: rgb(243, 86, 86);
      margin: 0 4px;
    }
  }
  .add-new-dom {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: coral;
    cursor: pointer;
  }
}
</style>
