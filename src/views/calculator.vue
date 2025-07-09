<template>
  <div class="blocks">
    <div class="top">
      <div class="count">{{ data.count }}</div>
    </div>
    <div class="bottom">
      <div id="b1" class="block">
        <calc style="font-size: 40px" @click="data.count = 0" :text="'AC'" />
        <calc :text="'+/-'" />
        <calc :text="'%'" />
        <calc :text="'÷'" />
      </div>
      <div id="b2" class="block 2">
        <calc :text="'1'" @click="data.count += '1'" />
        <calc :text="'2'" @click="data.count += '2'" />
        <calc :text="'3'" @click="data.count += '3'" />
        <calc :text="'x'" />
      </div>
      <div id="b2" class="block 3">
        <calc :text="'4'" @click="data.count += '4'" />
        <calc :text="'5'" @click="data.count += '5'" />
        <calc :text="'6'" @click="data.count += '6'" />
        <calc :text="'-'" />
      </div>
      <div id="b2" class="block 4">
        <calc :text="'7'" /> <calc :text="'8'" /> <calc :text="'9'" />
        <calc :text="'+'" />
      </div>
      <div id="b2" class="block 5">
        <calc class="width" :text="'0'" />
        <calc :text="','" />
        <calc :text="'='" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/counter";
import calc from "@/components/calc.vue";
const data = useDataStore();
</script>

<style>
#b2 :not(:last-child) {
  background-color: #6d6d6d;
}
#b1 :not(:last-child) {
  background-color: #aeaeae;
}
.width {
  width: 173px;
  border-radius: 40px;
  justify-content: start;
  padding-left: 26px;
}
.block {
  display: flex;
  gap: 13px;
  padding-bottom: 7px;
}
.blocks {
  background-color: #1c1c1c;
  width: 380px;
  height: 663px;
  border-radius: 35px;
  margin: 0 auto;
  margin-top: 150px;
  position: relative;
}
.line {
  width: 100%;
  border: 1px solid #fff;
  position: absolute;
  top: 211px;
}
.count {
  top: 115px;
  left: 320px;
  font-size: 64px;
  color: #fff;
}
.top {
  height: 220px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
}
.bottom {
  border-top: 1px solid #fff;
  padding: 10px;
  top: 221px;
}
</style>