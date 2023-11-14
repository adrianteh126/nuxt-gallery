<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center pt-5"
  >
    <div v-if="retrievedBookmarkedPosts.length !== 0">
      <div v-for="post in retrievedBookmarkedPosts" :key="post.id">
        <Post :post="post" />
      </div>
    </div>
    <div v-else>There is no bookmarked post.</div>
  </div>
</template>

<script>
import { useBookmarkStore } from "~/stores/bookmarkStore";

export default {
  beforeCreate() {
    // note: localStorage API not available in SSR
    const store = useBookmarkStore();
    // if store haven't been initialize, retrieve from local
    if (store.posts.length === 0) {
      store.loadLocalStorage();
    }
    store.loadLocalStorage();
  },
  computed: {
    retrievedBookmarkedPosts() {
      return useBookmarkStore().posts;
    },
  },
};
</script>
