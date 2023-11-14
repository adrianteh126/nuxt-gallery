<template>
  <div class="sidebar d-none d-md-block p-0 m-0">
    <div
      class="vh-100 d-flex flex-column p-4 border border-top-0 border-bottom-0 border-start-0 border-light"
    >
      <!-- Logo and App Name -->
      <router-link
        class="logo d-flex gap-2 justify-content-center align-items-center mb-3 text-decoration-none"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          class="me-1"
        >
          <path
            fill="none"
            stroke="#e0fb4a"
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
            stroke="#e0fb4a"
            stroke-linejoin="round"
            stroke-width="32"
            rx="45.99"
            ry="45.99"
          />
          <ellipse
            cx="372.92"
            cy="219.64"
            fill="none"
            stroke="#e0fb4a"
            stroke-miterlimit="10"
            stroke-width="32"
            rx="30.77"
            ry="30.55"
          />
          <path
            fill="none"
            stroke="#e0fb4a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"
          />
        </svg>
        <h2 class="m-0 fs-5">Nuxt Gallery</h2>
      </router-link>
      <!-- Navigation Buttons -->
      <nav
        class="nav-links d-flex flex-column justify-content-between flex-grow-1 my-2"
      >
        <div class="d-flex flex-column gap-2">
          <router-link class="text-decoration-none d-block p-2" to="/" exact>
            🏠 Home</router-link
          >
          <button
            type="button"
            class="text-decoration-none d-block p-2 border-0 text-start"
            @click="showCreatePostModal"
          >
            🖼 Create Post
          </button>

          <router-link class="text-decoration-none d-block p-2" to="/bookmark"
            >📚 Bookmark</router-link
          >
          <router-link class="text-decoration-none d-block p-2" to="/vuex"
            >🍍 Pinia Store</router-link
          >
          <router-link class="text-decoration-none d-block p-2" to="/typing"
            >💻 Typing</router-link
          >
          <router-link class="text-decoration-none d-block p-2" to="/testing"
            >⚙ Testing</router-link
          >
          <router-link class="text-decoration-none d-block p-2" to="/login"
            >🟨 Log In</router-link
          >
        </div>
        <button
          class="text-decoration-none d-block p-2 border-0 text-start"
          @click="handleSignOut"
        >
          🚪 Logout
        </button>
      </nav>
    </div>
  </div>
  <CreatePostModal ref="createPostModal" />
  <Toast ref="toast" />
</template>

<script>
export default {
  // emits: ["user-logout"],
  methods: {
    showCreatePostModal() {
      this.$refs.createPostModal.showModal()
    }
    // handleSignOut() {
    //   this.$useFirebaseAuth.signOut();
    //   // TODO : hard coded part, should use router later
    //   this.$parent.$emit("user-logout", false);
    //   // TODO : fix the showToast, might causing multiple exist in one page, no dispose method
    //   this.$refs.toast.showToast("Logout successfully!");
    // },
  }
}
</script>

<style>
.sidebar {
  width: 250px;
  background-color: var(--dark-color);
  padding: 20px;
  min-width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

.logo {
  color: var(--yellow-color);
}

.logo img {
  max-width: 30px;
}

.nav-links a {
  color: var(--light-color);
}

.nav-links button {
  color: var(--light-color);
  background-color: var(--dark-color);
}

.nav-links a,
.nav-links button {
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-links a:hover,
.nav-links button:hover {
  background-color: var(--yellow-color);
  color: var(--dark-color);
}
</style>
