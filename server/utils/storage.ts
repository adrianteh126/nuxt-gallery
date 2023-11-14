import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { storage } from './firebaseConnection'

// upload file then return a url reference
const uploadImage = async (
  fileData: any,
  fileType: any,
  userId: any,
  fileName: string = new Date().toISOString()
) => {
  // TODO: restructure hierarchy according to userID
  const imagesRef = ref(storage, `images/${userId}/${fileName}`)
  await uploadBytes(imagesRef, fileData, { contentType: fileType })
  const imgUrl = await getDownloadURL(imagesRef)
  return imgUrl
}

export { uploadImage }
