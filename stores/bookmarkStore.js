import { defineStore } from "pinia"

export const useBookmarkStore = defineStore("bookmark", {
  state: () => ({
    posts: [],
  }),
  getters: {
    // getBookmarkedPost: (state) => posts,
  },
  actions: {
    addToBookmark(post) {
      this.posts.push(post)
      this.saveToLocalStorage()
    },
    removeFromBookmark(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId)
      this.saveToLocalStorage()
    },
    isBookmarked(postId) {
      return this.posts.some((post) => post.id === postId)
    },
    loadLocalStorage() {
      const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]")
      this.posts = storedPosts
    },
    saveToLocalStorage() {
      localStorage.setItem("posts", JSON.stringify(this.posts))
    },
  },
})
