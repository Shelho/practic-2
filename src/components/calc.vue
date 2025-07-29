<template>
  <button
    class="calc"
    @click="$emit('add', text)"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @touchstart="onMouseDown"
    @touchend="onMouseUp"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(["onLongClick", "add"]);
const props = defineProps(["text"]);

const holdTimer = ref(null);
const holdTime = ref(500);
const isPressed = ref(false);

const onMouseDown = () => {
  isPressed.value = true;
  holdTimer.value = setTimeout(() => {
    if (isPressed.value) {
      onLongClick();
    }
  }, holdTime.value);
};
const onMouseUp = () => {
  isPressed.value = false;
  clearTimeout(holdTimer.value);
};
const onLongClick = () => {
  emits("onLongClick");
};
</script>

<style>
.calc {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 48px;
  color: white;
  background-color: #ffb800;
  padding: 5px 16px;
}
</style>