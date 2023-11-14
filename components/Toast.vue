<template>
  <!-- <input type="text" name="text" id="text" v-model="inputText" />
  <button @click="showToast(inputText)">Show</button> -->
  <div class="toast-container position-fixed bottom-0 end-0 p-4">
    <div
      :id="toastId"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          class="me-2"
        >
          <path
            fill="none"
            stroke="#1c1d22"
            stroke-linejoin="round"
            stroke-width="32"
            d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"
          />
          <rect
            width="400"
            height="336"
            x="96"
            y="128"
            fill="none"
            stroke="#1c1d22"
            stroke-linejoin="round"
            stroke-width="32"
            rx="45.99"
            ry="45.99"
          />
          <ellipse
            cx="372.92"
            cy="219.64"
            fill="none"
            stroke="#1c1d22"
            stroke-miterlimit="10"
            stroke-width="32"
            rx="30.77"
            ry="30.55"
          />
          <path
            fill="none"
            stroke="#1c1d22"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"
          />
        </svg>
        <strong class="me-auto">Nuxt Gallery</strong>
        {{ currentToastTime }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body text-dark">
        {{ toastContent }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { Toast } from "bootstrap"

export default {
  data() {
    const toast = ref(null)
    const toastId = ref(`toast-${Math.random().toString(36).substring(7)}`)
    const toastContent = ref("")
    const currentToastTime = ref("")
    const delay = 2000 // Delay in milliseconds
    return {
      toast,
      toastId,
      toastContent,
      currentToastTime,
      delay,
    }
  },
  mounted() {},

  methods: {
    showToast(message) {
      // TODO : try check on dynamic toastID causing component left there and didn't dispose. might causing resource problem
      this.toast = new Toast(`#${this.toastId}`, {
        delay: this.delay,
      })
      this.toastContent = message
      this.currentToastTime = new Date().toLocaleTimeString()
      this.toast.show()
      // console.log("showToast() :", this.toastContent);
    },
  },
}
</script>
