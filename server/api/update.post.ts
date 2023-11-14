import { update, getPostById } from '../utils/firestore'

export default defineEventHandler(async (event) => {
  // retrieve the body from api called
  const body = await readBody(event)

  const postId = body.id
  const likedStatus = {
    liked: !body.liked
  }
  try {
    await update(postId, 'posts', likedStatus)
    return {
      message: 'Update succesfully.',
      updatedPost: await getPostById('posts', postId)
    }
  } catch (error) {
    return { error: 'Failed to update post.' }
  }
})
