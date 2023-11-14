import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
  updateDoc,
  orderBy,
  limit
} from 'firebase/firestore'

import { firestore } from './firebaseConnection'

const queryByCollection = async (
  col: string,
  orderByCategory?: string,
  sortOrder?: 'asc' | 'desc',
  docLimit?: number
) => {
  const colRef = collection(firestore, col)
  var q = query(colRef)

  if (orderByCategory) {
    q = query(colRef, orderBy(orderByCategory, sortOrder))
  } else if (orderByCategory && docLimit) {
    q = query(colRef, orderBy(orderByCategory), limit(docLimit))
  }

  const snapshot = await getDocs(q)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return docs
}

const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestore, col)), document, { merge: true })
}

const add = async (col: string, document: Object) => {
  const colRef = collection(firestore, col)

  const docRef = await addDoc(colRef, document)

  return docRef
}

const del = async (col: string, id: string) => {
  const docRef = doc(firestore, col, id)
  return await deleteDoc(docRef)
}

const update = async (postId: string, col: string, newUpdate: object) => {
  const docRef = doc(firestore, 'posts', postId)

  return await updateDoc(docRef, newUpdate)
}

const getPostById = async (col: string, postId: string) => {
  try {
    // Get a reference to the document in the 'posts' collection by its ID
    const postRef = doc(firestore, col, postId)

    // Fetch the document data
    const postSnapshot = await getDoc(postRef)

    if (postSnapshot.exists()) {
      // Return the post data
      return postSnapshot.data()
    } else {
      // If the post with the specified ID does not exist, return null
      return null
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post.')
  }
}

export { queryByCollection, add, del, set, update, getPostById }
