<script lang="ts">
import {defineComponent} from "vue";
import {VueSpinnerGrid} from "vue3-spinners";

export default defineComponent({
  components: {VueSpinnerGrid}
});
</script>

<template>
  <VueSpinnerGrid :size="64"/>
</template>

<style scoped>
svg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>