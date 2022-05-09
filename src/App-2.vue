<template>
  <div>{{hello9}}</div>
  <button @click="hello9++">add</button>
  <HelloWord msg="巴嘎"></HelloWord>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HelloWord from '@/components/HelloWorld.vue'
const hello9 = ref(0)
</script>
