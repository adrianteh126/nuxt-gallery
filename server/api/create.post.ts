import { add } from '../utils/firestore'
import { Timestamp } from 'firebase/firestore'

export default defineEventHandler(async (event) => {
  // read POST request body
  const body: {
    caption: string
    imgUrl: string
    userId: string
  } = await readBody(event)

  const newPost = {
    caption: body.caption,
    createdAt: Timestamp.now(),
    imgUrl: body.imgUrl,
    userId: body.userId,
    liked: false
  }

  try {
    // create new post in firestore
    await add('posts', newPost)

    return {
      status: 200,
      result: newPost,
      message: 'Create post successfully.'
    }
  } catch (error) {
    return { status: '500', result: [], error: 'Failed to create post.' }
  }
  // } catch (error) {
  //   return { result: [], error: "Failed to upload image." };
  // }
})
