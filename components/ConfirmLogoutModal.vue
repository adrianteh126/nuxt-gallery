<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="confirmLogoutModal"
    tabindex="-1"
    aria-labelledby="confirmLogoutModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered text-light">
      <div class="modal-content bg-dark border-secondary">
        <div class="modal-header border-secondary" data-bs-theme="dark">
          <h1 class="modal-title fs-5" id="confirmLogoutModalLabel">
            Confirm Logout 🚪
          </h1>
        </div>
        <div class="modal-body">
          <p>Do you sure you want to logout?</p>
        </div>
        <div class="modal-footer border-secondary">
          <button
            type="button"
            class="create-post-btn btn"
            @click="hideModal()"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-danger text-dark"
            @click="handleSignOut()"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <!-- Loading Backdrop -->
    <LoadingBackdrop ref="loadingBackdrop" />
  </div>
  <!-- Toast -->
  <Toast ref="toast" />
</template>
<script>
import { Modal } from 'bootstrap'

export default {
  data() {
    const confirmLogoutModal = ref(null)
    return {
      confirmLogoutModal
    }
  },
  mounted() {
    this.confirmLogoutModal = new Modal('#confirmLogoutModal')
  },
  methods: {
    // modal related
    showModal() {
      this.confirmLogoutModal.show()
    },
    hideModal() {
      this.confirmLogoutModal.hide()
    },
    toggleLoadingBackdrop() {
      this.$refs.loadingBackdrop.toggleLoadingBackdrop()
    },

    // handlers related
    async handleSignOut() {
      this.hideModal()
      useFirebaseAuth.signOut()
      this.$refs.toast.showToast('Logout successfully!')
      await navigateTo('/login')
    }
  }
}
</script>

<style>
.create-post-btn {
  background-color: var(--yellow-color);
}

.create-post-btn:hover {
  color: var(--dark-color2);
  background-color: var(--yellow-color2);
}
</style>
