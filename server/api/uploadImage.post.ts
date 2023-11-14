import { uploadImage } from '../utils/storage'

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)

  if (!formData || formData.length === 0) {
    throw createError({ message: 'Image not found.' })
  }

  const file = formData?.at(0)
  const userId = formData?.at(1)

  try {
    const imgUrl = await uploadImage(file?.data, file?.type, userId?.data)

    return {
      status: 200,
      result: imgUrl,
      message: 'Upload image successfully.'
    }
  } catch (error) {
    return { status: 500, result: [], error: 'Failed to upload image.' }
  }
})
