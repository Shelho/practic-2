<template>
  <button class="calc" :class="{ gray: gray }">
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
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