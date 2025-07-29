<template>
  <div class="blocks">
    <div class="top">
      <div class="count">
        {{ operation }}
      </div>
    </div>
    <div class="bottom">
      <div id="b1" class="block">
        <calc
          style="font-size: 40px"
          @add="clear"
          @onLongClick="allClear"
          :text="'AC'"
        />
        <calc :text="'+/-'" @add="addValue" />
        <calc :text="'%'" @add="addValue" />
        <calc :text="'÷'" @add="addValue" />
      </div>
      <div id="b2" class="block 2">
        <calc :text="'1'" @add="addValue" />
        <calc :text="'2'" @add="addValue" />
        <calc :text="'3'" @add="addValue" />
        <calc :text="'x'" @add="addValue" />
      </div>
      <div id="b2" class="block 3">
        <calc :text="'4'" @add="addValue" />
        <calc :text="'5'" @add="addValue" />
        <calc :text="'6'" @add="addValue" />
        <calc :text="'-'" @add="addValue" />
      </div>
      <div id="b2" class="block 4">
        <calc :text="'7'" @add="addValue" />
        <calc :text="'8'" @add="addValue" />
        <calc :text="'9'" @add="addValue" />
        <calc :text="'+'" @add="addValue" />
      </div>
      <div id="b2" class="block 5">
        <calc class="width" :text="'0'" @add="addValue" />
        <calc :text="','" @add="addValue" />
        <calc :text="'='" @add="calculate" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/counter";
import calc from "@/components/calc.vue";
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
const data = useDataStore();
let { count } = storeToRefs(data);

const calcInfo = ref([]);
const res = ref("");

const operation = computed(() => {
  return res.value || calcInfo.value.reduce((all, el) => all + el, "") || "";
});

const addValue = (value) => {
  res.value = "";
  const lastInd = calcInfo.value.length - 1;

  if (lastInd < 0) return calcInfo.value.push(value);

  if (isNaN(value)) {
    if (isNaN(calcInfo.value[lastInd])) {
      calcInfo.value[lastInd] = value;
    } else {
      calcInfo.value.push(value);
    }
  } else {
    if (isNaN(calcInfo.value[lastInd])) {
      calcInfo.value.push(value);
    } else {
      calcInfo.value[lastInd] += value;
    }
  }
};

const clear = () => {
  const lastInd = calcInfo.value.length - 1;

  if (lastInd < 0) return;

  if (calcInfo.value[lastInd].length > 1) {
    calcInfo.value[lastInd] = calcInfo.value[lastInd].slice(0, -1);
  } else {
    calcInfo.value.splice(lastInd, 1);
  }
};

const allClear = () => {
  calcInfo.value = [];
  res.value = "";
};

const calculate = () => {
  let sum = 0;
  let operator = "";

  calcInfo.value.forEach((el, i) => {
    if (isNaN(el)) {
      operator = el;
    } else {
      if (!i) return (sum = +el);

      switch (operator) {
        case "+":
          sum += +el;
          break;

        case "-":
          sum -= +el;
          break;

        case "x":
          sum *= +el;
          break;

        case "÷":
          sum /= +el;
          break;
      }
    }
  });

  res.value = sum;
  calcInfo.value = [sum];
};
</script>

<style>
.isFalse {
  display: none;
}
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
  padding-right: 10px;
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