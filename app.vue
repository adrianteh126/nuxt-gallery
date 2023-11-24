<template lang="html">
  <!-- <div
    class="position-fixed z-1 text-break text-center text-dark bg-danger w-100"
    style="--bs-bg-opacity: 0.5"
    v-if="currentUser"
  >
    &lt;DEBUG&gt; Current User :
    <b>{{ currentUser.providerData }} </b>
  </div> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
// import { useAuthStore } from './stores/authStore'

export default {
  data() {
    // const currentUser = ref(null)
    // const authStore = useAuthStore()
    // return { currentUser, authStore }
  },
  created() {
    // useFirebaseAuth.onAuthStateChanged(useFirebaseAuth.auth, (user) => {
    //   this.currentUser = user
    //   if (!!this.currentUser) {
    //     this.login(this.currentUser)
    //   }
    // })
  },
  mounted() {},
  methods: {
    // login() {
    //   this.authStore.setUser(this.currentUser)
    // },
    // logout() {
    //   this.authStore.setUser(null)
    // }
  }
}
</script>

<style lang="scss" scoped></style>
