<template>
  <!-- Sign Up Modal -->
  <div
    class="modal fade"
    id="signUpModal"
    tabindex="-1"
    aria-labelledby="signUpModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered text-light">
      <div class="modal-content bg-dark border-secondary">
        <div class="modal-header border-secondary" data-bs-theme="dark">
          <h1 class="modal-title fs-5" id="signUpModalLabel">Sign Up 🟨</h1>
        </div>
        <div class="modal-body d-flex gap-3">
          <div
            class="d-flex flex-column align-items-start justify-content-center w-50"
          >
            <label for="input-email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="input-email"
              placeholder="Your email"
              maxlength="24"
              v-model="formData.email"
            />
            <label for="input-password" class="form-label mt-2"
              >Password
            </label>
            <input
              type="password"
              class="form-control"
              id="input-password"
              placeholder="Your password"
              maxlength="24"
              v-model="formData.password"
            />
            <label for="confirm-input-password" class="form-label mt-2"
              >Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirm-input-password"
              placeholder="Confirm your password"
              maxlength="24"
              v-model="formData.confirmPassword"
            />
            <label for="input-username" class="form-label mt-2"
              >Username
            </label>
            <input
              type="text"
              class="form-control"
              id="input-username"
              placeholder="Your username"
              maxlength="12"
              v-model="formData.displayName"
            />
          </div>
          <div class="d-flex w-50">
            <div
              class="flex-grow-1 d-flex justify-content-center align-items-center"
              style="background-color: var(--yellow-color)"
            >
              <div class="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  class="me-1"
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
                <h6 class="m-0 ms-1" style="color: var(--dark-color)">
                  Nuxt Gallery
                </h6>
              </div>
            </div>
          </div>
        </div>
        <p class="ps-3 fw-bold" :class="{ 'text-danger': isError }">
          {{ errorMessage }}
        </p>
        <div class="modal-footer border-secondary">
          <button
            type="button"
            class="create-post-btn btn fw-medium"
            @click="handleSignUp"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Login Modal -->
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
    @keyup.enter="handleSignIn('email')"
  >
    <div class="modal-dialog modal-dialog-centered text-light">
      <div class="modal-content bg-dark border-secondary">
        <div class="modal-header border-secondary" data-bs-theme="dark">
          <h1 class="modal-title fs-5" id="loginModalLabel">Login 🟨</h1>
        </div>
        <div class="modal-body d-flex gap-3">
          <div
            class="d-flex flex-column align-items-start justify-content-center w-50"
          >
            <label for="input-email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="input-email"
              placeholder="Your email"
              maxlength="24"
              v-model="formData.email"
            />
            <label for="input-password" class="form-label mt-2"
              >Password
            </label>
            <input
              type="password"
              class="form-control"
              id="input-password"
              placeholder="Your password"
              maxlength="24"
              v-model="formData.password"
            />
          </div>
          <div class="d-flex w-50">
            <div
              class="flex-grow-1 d-flex justify-content-center align-items-center"
              style="background-color: var(--yellow-color)"
            >
              <div class="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  class="me-1"
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
                <h6 class="m-0 ms-1" style="color: var(--dark-color)">
                  Nuxt Gallery
                </h6>
              </div>
            </div>
          </div>
        </div>
        <p class="ps-3 fw-bold" :class="{ 'text-danger': isError }">
          {{ errorMessage }}
        </p>
        <div class="modal-footer border-secondary">
          <div class="d-flex gap-2">
            <!-- TODO: remove the text-dark & disabled later -->
            <button
              class="btn d-flex justify-content-center align-items-center gap-2 w-100 fw-medium google-button text-dark"
              @click="handleSignIn('google')"
              disabled
            >
              <IconsLogosGoogle /> Continue with Google
            </button>
            <button
              type="button"
              class="create-post-btn btn fw-medium"
              @click="handleSignIn('email')"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Loading Backdrop -->
  <LoadingBackdrop ref="loadingBackdrop" />
  <!-- Toast -->
  <Toast ref="toast" />
</template>
<script>
import { Modal } from 'bootstrap'

export default defineNuxtComponent({
  data() {
    const signUpModal = ref(null)
    const loginModal = ref(null)
    const formData = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    }
    const errorMessage = ref('')
    const isError = ref(true)
    return {
      signUpModal,
      loginModal,
      errorMessage,
      isError,
      formData
    }
  },
  mounted() {
    this.signUpModal = new Modal('#signUpModal')
    this.loginModal = new Modal('#loginModal')
  },
  methods: {
    // handlers
    async handleSignIn(method) {
      this.toggleLoadingBackdrop()
      let result
      switch (method) {
        case 'email':
          result = await useFirebaseAuth.signIn(
            this.formData.email,
            this.formData.password
          )
          break
        case 'google':
          result = await useFirebaseAuth.signInGooglePopUp()
          break
      }

      if (result && 'errorCode' in result && 'errorMessage' in result) {
        // Handle the error here
        console.error('Sign in error:', result.errorMessage)
        this.isError = true
        this.errorMessage = result.errorMessage.slice(10)
        setTimeout(() => {
          this.toggleLoadingBackdrop()
        }, 300)
      } else {
        // Handle successful sign in
        this.isError = false
        this.errorMessage = 'Sign in successfully'
        console.log('Sign in successful!', result)
        this.closeModal(this.loginModal)
        this.toggleLoadingBackdrop()
        await navigateTo('/')
      }
    },
    async handleSignUp() {
      // validation : user submit empty form
      if (
        !this.formData.email ||
        !this.formData.password ||
        !this.formData.confirmPassword ||
        !this.formData.displayName
      ) {
        this.isError = true
        this.errorMessage = 'Fill in required field!'
        console.error('Sign up error:', this.errorMessage)
        return
      }
      // validation : password not match
      if (this.formData.password !== this.formData.confirmPassword) {
        this.isError = true
        this.errorMessage = 'Password not match!'
        console.error('Sign up error:', this.errorMessage)
        return
      }
      // validation : password not match
      if (
        this.formData.password.length < 6 ||
        this.formData.confirmPassword < 6
      ) {
        this.isError = true
        this.errorMessage = 'Password should be at least 6 characters!'
        console.error('Sign up error:', this.errorMessage)
        return
      }

      // sending signup request to firebase
      this.toggleLoadingBackdrop()
      // firebaseAuth create new user & update display name
      const firebaseAuthSignUpAndUpdate = await useFirebaseAuth
        .signUp(this.formData.email, this.formData.password)
        .then(async (userCredential) => {
          await useFirebaseAuth.updateUser({
            newDisplayName: this.formData.displayName
          })
          return userCredential
        })
        .catch((error) => {
          return { error: error.message }
        })
      let firestoreCreateUser
      if (!firebaseAuthSignUpAndUpdate.error) {
        firestoreCreateUser = await $fetch('/api/users/create', {
          method: 'POST',
          body: {
            uid: firebaseAuthSignUpAndUpdate.user.uid,
            email: this.formData.email,
            password: this.formData.password,
            displayName: this.formData.displayName
          }
        })
      }

      // Handle the error here
      if (firebaseAuthSignUpAndUpdate.error || firestoreCreateUser.error) {
        this.isError = true
        this.errorMessage =
          firebaseAuthSignUpAndUpdate.error ?? firestoreCreateUser.error
        console.error('Sign up error:', this.errorMessage)
        setTimeout(() => {
          this.toggleLoadingBackdrop()
        }, 500)
      } else {
        // Handle successful sign up
        this.isError = false
        this.errorMessage = 'Sign up successfully'
        console.log('Sign up successfully!', [
          firebaseAuthSignUpAndUpdate,
          firestoreCreateUser
        ])
        this.clearForm()
        this.closeModal(this.signUpModal)
        this.toggleLoadingBackdrop()
        await navigateTo('/')
      }
    },

    // modal related
    showModal(modal) {
      modal.show()
    },
    hideModal(modal) {
      modal.hide()
    },
    closeModal(modal) {
      //TODO : erase input data when modal is closed
      this.clearForm()
      modal.hide()
    },
    toggleLoadingBackdrop() {
      this.$refs.loadingBackdrop.toggleLoadingBackdrop()
    },

    // utils related
    clearForm() {
      Object.keys(this.formData).forEach((key) => (this.formData[key] = ''))
    }
  },
  watch: {}
})
</script>

<style scoped lang="scss">
.create-post-btn {
  background-color: var(--yellow-color);

  &:hover {
    color: var(--dark-color2);
    background-color: var(--yellow-color2);
  }
}

.google-button {
  background-color: var(--light-color);
  &:hover {
    color: var(--dark-color2);
    background-color: var(--light-color2);
  }
}
</style>
