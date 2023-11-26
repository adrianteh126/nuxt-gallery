import { add } from '../../utils/firestore'
import { Timestamp } from 'firebase/firestore'

export default defineEventHandler(async (event) => {
  const body: {
    uid: string
    email: string
    password: string
    displayName: string
  } = await readBody(event)

  try {
    // firestore create new user record in 'users'
    const newUser = {
      uid: body.uid,
      email: body.email,
      password: body.password,
      displayName: body.displayName,
      photoURL: '',
      createdAt: Timestamp.now()
    }
    await add('users', newUser).catch((error) => {
      throw new Error(error)
    })

    return {
      status: 200,
      result: newUser,
      message: 'Create user successfully.'
    }
  } catch (error: any) {
    return {
      status: '500',
      result: [],
      error: error.message ?? 'Failed to create user.'
    }
  }
})
