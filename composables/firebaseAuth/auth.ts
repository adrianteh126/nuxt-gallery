import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import type { UserCredential } from 'firebase/auth'

import { auth } from './firebaseConnection'

// Sign up new user
export const signUp = (email: string, password: string) => {
  return new Promise<
    { errorCode: string; errorMessage: string } | UserCredential
  >((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        resolve(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log({ errorCode, errorMessage })
        resolve({ errorCode, errorMessage })
      })
  })
}

// Sign in existing users
export const signIn = (email: string, password: string) => {
  return new Promise<
    { errorCode: string; errorMessage: string } | UserCredential
  >((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // export const user = userCredential.user;
        resolve(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log({ errorCode, errorMessage })
        resolve({ errorCode, errorMessage })
      })
  })
}

// Sign in with Google Pop Up
export const signInGooglePopUp = () => {
  new Promise((resolve, reject) => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential!.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        console.log(
          `Sign in successfully with token : ${token}, user : ${JSON.stringify(
            user.email
          )}`
        )
        resolve(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        resolve({ errorCode, errorMessage, email, credential })
      })
  })
}

// Sign out exsiting users
export const signOut = () => {
  if (auth.currentUser) {
    auth
      .signOut()
      .then(() => {
        console.log(`Sign out user successfully`)
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    console.log(`No user log in`)
  }
}

export const updateUser = (
  newDisplayName?: string,
  newPhotoURL?: string,
  newEmail?: string,
  newPassword?: string
) => {
  const user = auth.currentUser
  if (!user) {
    return new Error('User not available')
  }
  if (newDisplayName) {
    updateProfile(user, {
      displayName: newDisplayName
    })
      .then(() => {
        console.log('Update display name succcessfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  if (newPhotoURL) {
    updateProfile(user, {
      photoURL: newPhotoURL
    })
      .then(() => {
        console.log('Update photo URL succcessfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  if (newEmail) {
    updateEmail(user, newEmail)
      .then(() => {
        console.log('Update email succcessfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  if (newPassword) {
    updatePassword(user, newPassword)
      .then(() => {
        console.log('Update password succcessfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deleteUser = () => {
  const user = auth.currentUser
  if (!user) {
    return new Error('User not available')
  } else {
    user
      .delete()
      .then(() => {
        console.log(`Delete user ${user.uid} successfully`)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export { onAuthStateChanged }
