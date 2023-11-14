import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const runtimeConfig = useRuntimeConfig().public

// Firebase configuration
const firebaseConfig = {
  apiKey: runtimeConfig.FIREBASE_API_KEY,
  authDomain: runtimeConfig.FIREBASE_AUTH_DOMAIN,
  projectId: runtimeConfig.FIREBASE_PROJECT_ID,
  storageBucket: runtimeConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: runtimeConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: runtimeConfig.FIREBASE_APP_ID,
  measurementId: runtimeConfig.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Get reference and export the Firestore instance
export const firestore = getFirestore(firebaseApp)

// Get reference and export the Storage instance
export const storage = getStorage(firebaseApp)
