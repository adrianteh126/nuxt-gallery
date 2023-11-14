import { defineStore } from "pinia";

// // Vue 3 composition API
// export const useCompositionCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const name = ref("Eduardo");
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, name, doubleCount, increment };
// });

//  Vue 2 Option API
export const useOptionCounterStore = defineStore("counter", {
  state: () => ({ count: 2, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
