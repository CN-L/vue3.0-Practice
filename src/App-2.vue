<template>
  <div>{{hello9}}</div>
  <button @click="hello9++">add</button>
  <HelloWord msg="巴嘎"></HelloWord>
  <TestMsg @change="showAloer" :user='user'></TestMsg>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HelloWord from '@/components/HelloWorld.vue'
import TestMsg from '@/components/test-msg.vue'
const hello9 = ref<number>(0)
const user = {
  name: 'viking',
  age: 90
}
const showAloer = (txt: number) => {
  console.log(txt)
}
</script>
