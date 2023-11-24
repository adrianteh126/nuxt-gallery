<template>
  <div class="sidebar d-none d-md-block p-0 m-0">
    <div
      class="vh-100 d-flex flex-column p-4 border border-top-0 border-bottom-0 border-start-0 border-light"
    >
      <!-- Logo and App Name -->
      <NuxtLink
        class="logo d-flex gap-2 justify-content-center align-items-center mb-3 text-decoration-none"
        to="/"
      >
        <IconsNuxtGallery />
        <h2 class="m-0 fs-5">Nuxt Gallery</h2>
      </NuxtLink>
      <!-- Navigation Buttons -->
      <nav
        class="nav-links d-flex flex-column justify-content-between flex-grow-1 my-2"
      >
        <div class="d-flex flex-column gap-2">
          <NuxtLink class="text-decoration-none d-block p-2" to="/" exact>
            🏠 Home</NuxtLink
          >
          <button
            type="button"
            class="text-decoration-none d-block p-2 border-0 text-start"
            @click="showCreatePostModal"
          >
            🖼 Create Post
          </button>

          <NuxtLink class="text-decoration-none d-block p-2" to="/bookmark"
            >📚 Bookmark</NuxtLink
          >

          <NuxtLink class="text-decoration-none d-block p-2" to="/profile"
            >🙍‍♂️ Profile</NuxtLink
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
    },
    async handleSignOut() {
      useFirebaseAuth.signOut()
      this.$refs.toast.showToast('Logout successfully!')
      await navigateTo('/login')
    }
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
