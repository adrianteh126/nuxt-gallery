<template lang="html">
  <div
    class="position-fixed z-1 text-break text-center text-dark bg-danger w-100 pe-none"
    style="--bs-bg-opacity: 0.5"
    v-if="currentUser"
  >
    &lt;DEBUG&gt; Current User :
    <b>{{ currentUser.providerData }} </b>
  </div>
</template>

<script>
export default {
  data() {
    const currentUser = ref(null)
    return { currentUser }
  },
  created() {
    useFirebaseAuth.onAuthStateChanged(useFirebaseAuth.auth, (user) => {
      this.currentUser = user
      if (!!this.currentUser) {
        this.login(this.currentUser)
      }
    })
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
