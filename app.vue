<template lang="html">
  <div>
    <div class="d-flex dashboard">
      <SideNavBar />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup></script>

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
