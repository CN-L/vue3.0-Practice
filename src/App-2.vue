<template>
  <div>{{hello9}}</div>
  <button @click="hello9++">add</button>
  <HelloWord msg="1"></HelloWord>
  <test-msg @change="showAloer" :user='user'></test-msg>
  <h1 v-if="keyIsDwon">h被按下了哦</h1>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HelloWord from '@/components/HelloWorld.vue'
import TestMsg from '@/components/test-msg.vue'
import useKeyHandle from '@/hooks/useKeyUp'
const hello9 = ref<number>(0)
const keyIsDwon = useKeyHandle('h')
const user = {
  name: 'viking',
  age: 90
}
onMounted(() => {
  axios.get('/dog/api/breeds/image/random').then(res => {
    console.log(res.data, '狗的照片')
  })
  axios.get('/cat/api/images/search').then(res => {
    console.log(res.data, '猫的照片')
  })
})
const showAloer = (txt: number) => {
  console.log(txt)
}
</script>
