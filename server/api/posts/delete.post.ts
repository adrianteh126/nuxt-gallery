import { del } from '../../utils/firestore'

export default defineEventHandler(async (event) => {
  const postId = '7DtPOBnsq5NWnazBfkEL'
  try {
    await del('posts', postId)

    return {
      message: 'Delete post successfully.'
    }
  } catch (error) {
    return { error: 'Failed to delete post.' }
  }
})
