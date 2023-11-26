<template>
  <!-- <div>{{ props.post }}</div> -->
  <div v-if="post" class="post card mb-3">
    <!-- User ID -->
    <div class="card-header d-flex bg-light align-items-center">
      <IconsProfile class="me-3" />
      <div class="bg-light">User ID: {{ post.userId }}</div>
    </div>

    <div class="card-body bg-light">
      <!-- Caption -->
      <div class="mb-2 ms-2 fw-medium">"{{ post.caption }}"</div>

      <!-- Post Image -->
      <img
        :src="post.imgUrl"
        class="card-img-top card-image p-1 rounded-4"
        alt="Post Image"
      />

      <!-- Heart Button -->
      <div class="action-items mt-2 ms-1 d-flex gap-1">
        <div>
          <IconsIonAndroidFavoriteOutline
            class="icon-inactive"
            @click="toggleLike"
            v-if="!post.liked"
          />
          <IconsIonHeart @click="toggleLike" v-else />
        </div>
        <div>
          <IconsIonBookmarkOutline
            class="icon-inactive"
            @click="toggleBookmark"
            v-if="!store.isBookmarked(post.id)"
          />
          <IconsIonBookmark @click="toggleBookmark" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBookmarkStore } from '~/stores/bookmarkStore'

const props = defineProps(['post'])

const toggleLike = async () => {
  await $fetch('/api/posts/update', {
    method: 'POST',
    body: { id: props.post.id, liked: props.post.liked }
  })
  props.post.liked = !props.post.liked
}

const store = useBookmarkStore()

const toggleBookmark = async () => {
  if (store.isBookmarked(props.post.id)) {
    store.removeFromBookmark(props.post.id)
  } else {
    store.addToBookmark(props.post)
  }
}
</script>

<style>
.post {
  max-width: 455px;
}

.card-image {
  max-height: 500px;
}
</style>
