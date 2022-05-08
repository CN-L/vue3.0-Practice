<template>
  <div class="hello">
    dajiahao
    <h1>{{ msg }}</h1>
    <my-modal></my-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // defineComponent完全为了服务ts所存在
import myModal from '@/components/Modal.vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  components: {
    myModal
  },
  setup (props, context) {
    // props.msg
    // context.attrs
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
