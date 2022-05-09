<template>
  <div>{{hello9}}</div>
  <button @click="hello9++">add</button>
  <HelloWord msg="巴嘎"></HelloWord>
  <test-msg @change="showAloer" :user='user'></test-msg>
  <h1 v-if="keyIsDwon">h被按下了哦</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HelloWord from '@/components/HelloWorld.vue'
import TestMsg from '@/components/test-msg.vue'
import useKeyHandle from '@/hooks/useKeyUp'
const hello9 = ref<number>(0)
const keyIsDwon = useKeyHandle('h')
const user = {
  name: 'viking',
  age: 90
}
const showAloer = (txt: number) => {
  console.log(txt)
}
</script>
