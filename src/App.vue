<template>
  <!-- <nav> -->
    <!-- 在模版对面它会将ref对象直接把值展示出来，所以不需要写.value -->
    {{count}}<span @click="increase">👍</span>
    {{double}}
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue'
interface DataProps {
  count: number,
  double: number,
  increase: ()=> void
}
export default defineComponent({
  setup () {
    // ref 一般用于原始类型
    const conut = ref(0)
    // 一般用于复杂类型
    const form: DataProps = reactive({
      count: 0,
      increase: () => { form.count++ },
      double: computed(() => form.count * 2)
    })
    // 使用计算属性
    const changeCount = () => {
      conut.value++
    }
    const double = computed(() => {
      return conut.value * 2
    })
    const toRefData = toRefs(form)//解构后丧失响应性 ，toRefs可保持响应式
    return {
      ...toRefData
      // conut,
      // double,
      // changeCount
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
