import { auth } from '~/composables/firebaseAuth/firebaseConnection'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const currentUser = await auth.authStateReady().then(() => {
    return auth.currentUser
  })

  if (!currentUser && to.fullPath !== '/login') {
    return navigateTo('/login')
  }

  if (currentUser && to.fullPath === '/login') {
    return navigateTo('/')
  }
})
