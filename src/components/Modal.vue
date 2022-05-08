<template>
<teleport to="#modal">
  <div v-if="isOpen" class="modal">
    <h2>
      {{isOpen}}22
      <slot> this is a modal </slot>
    </h2>
    <button @click="buttonClik">关闭</button>
  </div>
</teleport>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'myModal',
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-modal': null
  },
  setup (props, context) {
    const buttonClik = () => {
      context.emit('close-modal')
    }
    return {
      buttonClik
    }
  }
})
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  // transform: translate(-50%, -50%);
  height: 300px;
  width: 300px;
  background: pink;
}
</style>
