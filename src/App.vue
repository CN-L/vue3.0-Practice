<template>
  <!-- <nav> -->
    <!-- 在模版对面它会将ref对象直接把值展示出来，所以不需要写.value -->
    {{conut}}<span @click="changeCount">👍</span>
    {{double}}
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup () {
    const conut = ref(0)
    // 使用计算属性
    const changeCount = () => {
      conut.value++
    }
    const double = computed(() => {
      return conut.value * 2
    })
    return {
      conut,
      double,
      changeCount
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
