<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center pt-5"
  >
    <div>
      <p class="fw-bold">Component 1</p>
      count : {{ count }}
      <br />
      doubleCount : {{ doubleCount }}
      <div class="mt-2">
        <button class="btn bg-primary text-light" @click="addOne">+</button>
        <button class="btn bg-danger text-light ms-2" @click="minusOne">
          -
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useOptionCounterStore } from "~/stores/myStore";

export default {
  data() {
    const store = useOptionCounterStore();
    const { count, doubleCount } = storeToRefs(store);
    return {
      store: store,
      count: count,
      doubleCount: doubleCount,
    };
  },
  methods: {
    addOne() {
      this.store.increment();
      console.log("New count: ", this.store.count);
    },
    minusOne() {
      this.store.decrement();
      console.log("New count: ", this.store.count);
    },
  },
  computed: {},
};
</script>

<!-- <script setup>
import { useCompositionCounterStore } from "~/stores/myStore";

const store = useCompositionCounterStore();

const { data } = await useAsyncData("count", () => store.doubleCount);
</script> -->
