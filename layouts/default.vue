<template lang="html">
  <div class="d-flex dashboard">
    <SideNavBar />
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard {
  background-color: var(--dark-color);
  color: var(--light-color);
  margin-left: 250px;
  min-height: 100vh;

  @media (max-width: 767.5px) {
    margin-left: 0;
  }
}
</style>
