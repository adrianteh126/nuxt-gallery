<template>
  <div class="modal fade loadingBackdrop" id="loadingBackdrop" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <SvgSpinnersBarsRotateFade class="m-auto" />
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  data() {
    const loadingBackdrop = ref(null);
    return {
      loadingBackdrop,
    };
  },
  mounted() {
    this.loadingBackdrop = new Modal("#loadingBackdrop", {
      backdrop: "static",
    });
  },
  methods: {
    toggleLoadingBackdrop() {
      this.loadingBackdrop.toggle();
    },
  },
};
</script>

<style>
.loadingBackdrop {
  z-index: 1600;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
