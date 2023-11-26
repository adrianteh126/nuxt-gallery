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

import { auth } from './firebaseConnection'

// Sign up new user
export const signUp = async (email: string, password: string) => {
  const userCredential = createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    throw new Error(error)
  })
  return userCredential
}

// Sign in existing users
export const signIn = async (email: string, password: string) => {
  const userCredential = signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    throw new Error(error)
  })
  return userCredential
}

// Sign in with Google Pop Up
export const signInGooglePopUp = async () => {
  const userCredential = signInWithPopup(auth, new GoogleAuthProvider()).catch(
    (error) => {
      throw new Error(error)
    }
  )
  return userCredential
}

// Sign out existing users
export const signOut = async () => {
  if (auth.currentUser) {
    await auth
      .signOut()
      .then(() => {
        console.log(`Sign out user successfully`)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

// Update user info
export const updateUser = async ({
  newDisplayName,
  newPhotoURL,
  newEmail,
  newPassword
}: {
  newDisplayName?: string
  newPhotoURL?: string
  newEmail?: string
  newPassword?: string
}) => {
  const user = auth.currentUser

  if (!user) {
    throw new Error('User not available')
  }
  if (newDisplayName) {
    await updateProfile(user, {
      displayName: newDisplayName
    }).catch((error) => {
      throw new Error(error)
    })
  }
  if (newPhotoURL) {
    await updateProfile(user, {
      photoURL: newPhotoURL
    }).catch((error) => {
      throw new Error(error)
    })
  }
  if (newEmail) {
    await updateEmail(user, newEmail).catch((error) => {
      throw new Error(error)
    })
  }
  if (newPassword) {
    await updatePassword(user, newPassword).catch((error) => {
      throw new Error(error)
    })
  }
}

// Delete user
export const deleteUser = async () => {
  const user = auth.currentUser
  if (!user) {
    return new Error('User not available')
  }
  await user.delete().catch((error) => {
    throw new Error(error)
  })
}

export { onAuthStateChanged }
