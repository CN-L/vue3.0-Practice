<template>
  <div class="hello">
    <h3>{{userLocation}} 任意门</h3>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue' // defineComponent完全为了服务ts所存在
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  setup () {
    const userLocation = inject<boolean>('lang')
    return {
      userLocation
    }
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
