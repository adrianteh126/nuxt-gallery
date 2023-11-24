import { initializeApp } from 'firebase/app'
import { getAuth, browserLocalPersistence } from 'firebase/auth'

// const runtimeConfig = useRuntimeConfig().public

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: runtimeConfig.FIREBASE_API_KEY,
//   authDomain: runtimeConfig.FIREBASE_AUTH_DOMAIN,
//   projectId: runtimeConfig.FIREBASE_PROJECT_ID,
//   storageBucket: runtimeConfig.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: runtimeConfig.FIREBASE_MESSAGING_SENDER_ID,
//   appId: runtimeConfig.FIREBASE_APP_ID,
//   measurementId: runtimeConfig.FIREBASE_MEASUREMENT_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCRd8fD8oAUZlPqhProFjDNCJvSdcMN6tc',
  authDomain: 'nuxt-gallery-8a11d.firebaseapp.com',
  projectId: 'nuxt-gallery-8a11d',
  storageBucket: 'nuxt-gallery-8a11d.appspot.com',
  messagingSenderId: '971255359389',
  appId: '1:971255359389:web:b15dd734da12aad5547174',
  measurementId: 'G-VFNFP786Z4'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Setup Auth state persistence
const auth = getAuth(firebaseApp)
auth.setPersistence(browserLocalPersistence)

// Get reference and export the Firestore instance
export { auth }
