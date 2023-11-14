<template>
  <div
    class="d-flex flex-column justify-content-center align-item-center w-100"
  >
    <div
      class="container p-3 mb-3 border border-light rounded text-center"
      style="background-color: var(--dark-color2); max-width: 40vw"
    >
      <p v-if="!currentUser">⭕Please Log In</p>
      <p v-else>👩‍🤝‍🧑🏼Current User: {{ currentUser.displayName }}</p>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div v-if="!currentUser">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
              </div>
              <div v-else>
                <h6>You are logged in.</h6>
                <p>UID: {{ currentUser.uid }}</p>
                <p>Name: {{ currentUser.displayName }}</p>
                <p>Email: {{ currentUser.email }}</p>
                <p>PhotoURL: {{ currentUser.photoURL }}</p>
                <p>Metadata: {{ currentUser.metadata }}</p>
              </div>
              <div :class="promptMessage">{{ errorMessage }}</div>
              <div v-if="!currentUser" class="d-flex justify-content-between">
                <div>
                  <button
                    @click="handleSignIn('email')"
                    class="btn btn-primary mt-3 me-2"
                  >
                    Sign In
                  </button>
                  <button
                    v-if="!currentUser"
                    @click="handleSignIn('google')"
                    class="btn btn-info mt-3 me-2"
                  >
                    Sign In with Google
                  </button>
                </div>
                <button @click="handleSignUp" class="btn btn-warning mt-3 me-2">
                  Sign Up
                </button>
              </div>
              <button
                v-else
                @click="useFirebaseAuth.signOut()"
                class="btn btn-danger mt-3"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { User } from 'firebase/auth'

export default {
  created() {},
  data() {
    const currentUser = ref<User | null>(null)
    const [email, password] = ''
    const errorMessage = ref('')
    const isError = ref(true)
    return { currentUser, email, password, errorMessage, isError }
  },
  computed: {
    promptMessage() {
      return this.isError
        ? 'mt-2 text-danger fw-bold'
        : 'mt-2 text-success fw-bold'
    }
  },
  mounted() {
    // auth state listener
    useFirebaseAuth.onAuthStateChanged(useFirebaseAuth.auth, (user) => {
      this.currentUser = user
    })
  },
  methods: {
    async handleSignIn(method: string) {
      let result
      if (method === 'email') {
        result = await useFirebaseAuth.signIn(this.email, this.password)
      }
      if (method === 'google') {
        result = await useFirebaseAuth.signInGooglePopUp()
      }

      if (result && 'errorCode' in result && 'errorMessage' in result) {
        // Handle the error here
        console.error('Sign in error:', result.errorMessage)
        this.isError = true
        this.errorMessage = result.errorMessage.slice(10)
      } else {
        // Handle successful sign in
        this.isError = false
        this.errorMessage = 'Sign in successfully'
        console.log('Sign in successful!', result)
      }
    },
    async handleSignUp() {
      const result = await useFirebaseAuth.signUp(this.email, this.password)
      if (result && 'errorCode' in result && 'errorMessage' in result) {
        // Handle the error here
        console.error('Sign up error:', result.errorMessage)
        this.isError = true
        this.errorMessage = result.errorMessage.slice(10)
      } else {
        // Handle successful sign up
        this.isError = false
        this.errorMessage = 'Sign up successfully'
        console.log('Sign up successful!', result)
      }
    }
  }
}
</script>
