<template>
  <!-- <nav> -->
    <!-- 在模版对面它会将ref对象直接把值展示出来，所以不需要写.value -->
    {{count}}<span @click="increase">👍</span>
    <h1>{{x}},{{y}}</h1>
    <div>{{double}}</div>
    <button @click="updaetGreenying">up title</button>
    <ul>
      <li v-for="number in numbers" :key="number">{{number}}</li>
    </ul>
    <h1>{{person.name}}</h1>
    <h2>{{result}}</h2>
    <img :src="result[0].url" alt="">
  <!-- </nav> -->
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs, onMounted, onUpdated, onRenderTriggered, watch, onUnmounted } from 'vue'
import useMousePosition from '@/hooks/useMousePosition'
import useUrlLoader from '@/hooks/useUrlLoaders'
interface DataProps {
  count: number,
  double: number,
  numbers: number[],
  person: {
    name?: string
  }
  increase: ()=> void
}
interface NoResult {
 message: string,
 status: string

}
interface Catresult {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: any[],

}
export default defineComponent({
  setup () {
    // onMounted(() => {
    const { result, loading } = useUrlLoader<Catresult[]>('https://api.thecatapi.com/v1/images/search')
    // })
    onUpdated(() => {
      console.log('updated')
    })
    onRenderTriggered((event) => {
      console.log('onRenderTriggered', event)
    })
    // ref 一般用于原始类型
    const conut = ref(0)
    // 一般用于复杂类型
    const form: DataProps = reactive({
      count: 0,
      increase: () => { form.count++ },
      double: computed(() => form.count * 2),
      numbers: [0, 1],
      person: {}
    })
    // 使用计算属性
    const changeCount = () => {
      conut.value++
    }
    const greeting = ref('')
    const updaetGreenying = () => {
      greeting.value = 'hellow' + form.count
    }
    const { x, y } = toRefs(useMousePosition())
    // 监听
    watch([greeting, () => form.count], (newVal, oldVal) => {
      console.log(newVal, oldVal)
      document.title = greeting.value
    })
    form.numbers[0] = 10
    form.person.name = '我是你爹'
    // form.personw.age = 90
    const double = computed(() => {
      return conut.value * 2
    })

    const toRefData = toRefs(form)// 解构后丧失响应性 ，toRefs可保持响应式
    return {
      ...toRefData,
      updaetGreenying,
      x,
      y,
      result,
      loading
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
