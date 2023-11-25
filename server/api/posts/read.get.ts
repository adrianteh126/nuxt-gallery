import { queryByCollection } from '../../utils/firestore'

export default defineEventHandler(async (event) => {
  try {
    const docs = await queryByCollection('posts', 'createdAt', 'desc')

    return {
      docs: docs,
      message: 'Read posts successfully.'
    }
  } catch (error) {
    return { result: [], error: 'Failed to read posts.' }
  }
})
