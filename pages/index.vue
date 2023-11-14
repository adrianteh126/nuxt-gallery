<template lang="html">
  <div
    class="container-fluid d-flex justify-content-center align-items-center pt-5"
  >
    <div>
      <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </div>
      <Post />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBookmarkStore } from '~/stores/bookmarkStore'

onMounted(() => {
  const store = useBookmarkStore()
  store.loadLocalStorage()
})

// use api to fetch the posts
const queryPosts = async () => {
  // get the response value by $fetch
  const res = await $fetch('/api/read')
  return res.docs
}

const posts = ref([])
posts.value = await queryPosts()
</script>

<style lang="scss" scoped></style>
