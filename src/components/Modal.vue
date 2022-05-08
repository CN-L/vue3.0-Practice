<template>
<teleport to="#modal">
  <div class="modal1">
    <div>大家好</div>
  </div>
</teleport>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'myModal',
  setup () {
    return {

    }
  }
})
</script>
<style lang="scss">
.modal1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  background: yellow;
}
</style>
