<template>
  <!-- <div class="text-center">
    <p>Landing Page</p>
  </div> -->
  <div
    class="container-fluid landing-page vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div>
      <div
        class="logo d-flex gap-2 justify-content-center align-items-center mb-3 text-decoration-none"
      >
        <IconsNuxtGallery />
        <h2 class="m-0 fs-5">Nuxt Gallery</h2>
      </div>
      <div class="d-flex gap-2 pt-1">
        <button
          class="btn btn-sm landing-page-btn px-3"
          @click="showLoginModal"
        >
          Log In
        </button>
        <button
          class="btn btn-sm landing-page-btn px-3"
          @click="showSignUpModal"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>

  <SignUpLoginModal ref="signUpLoginModal" />
</template>

<script>
export default {
  created() {
    useFirebaseAuth.onAuthStateChanged(useFirebaseAuth.auth, (user) => {
      this.currentUser = user

      if (this.currentUser) {
        this.authStore.setUser(user)
      } else {
        this.authStore.setUser(null)
      }
    })
  },
  data() {
    const currentUser = ref(null)
    const [email, password] = ''
    const errorMessage = ref('')
    const isError = ref(true)
    const authStore = useAuthStore()
    return { currentUser, email, password, errorMessage, isError, authStore }
  },
  emits: ['user-login'],
  computed: {
    promptMessage() {
      return this.isError
        ? 'mt-2 text-danger fw-bold'
        : 'mt-2 text-success fw-bold'
    }
  },
  mounted() {},
  methods: {
    showSignUpModal() {
      this.$refs.signUpLoginModal.showModal(
        this.$refs.signUpLoginModal.signUpModal
      )
    },
    showLoginModal() {
      this.$refs.signUpLoginModal.showModal(
        this.$refs.signUpLoginModal.loginModal
      )
    }
  }
}

definePageMeta({
  layout: 'fullpage'
})
</script>

<style scoped>
.landing-page {
  color: var(--light-color);
  background-color: var(--dark-color);
}

.logo {
  color: var(--yellow-color);
}

.landing-page-btn {
  color: var(--dark-color);
  background-color: var(--yellow-color);
  border-radius: 50;
  transition: color 0.3s, background-color 0.3s;
}

.landing-page-btn:hover {
  color: var(--yellow-color);
  background-color: var(--dark-color);
  border-color: var(--yellow-color);
}
</style>
