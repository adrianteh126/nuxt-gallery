import {
  deleteUser,
  signIn,
  signInGooglePopUp,
  signOut,
  signUp,
  updateUser,
  onAuthStateChanged
} from './firebaseAuth/auth'
import { auth } from './firebaseAuth/firebaseConnection'

export const useFirebaseAuth = {
  deleteUser,
  signIn,
  signInGooglePopUp,
  signOut,
  signUp,
  updateUser,
  onAuthStateChanged,
  auth
}
