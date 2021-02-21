import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCs6sl2__dyTzq1tsynv0aBhLZUQuEvWFI',
  authDomain: 'netflix-a7511.firebaseapp.com',
  projectId: 'netflix-a7511',
  storageBucket: 'netflix-a7511.appspot.com',
  messagingSenderId: '525668974043',
  appId: '1:525668974043:web:a6c112927dccd49e60fbfe'
}

const firebase = Firebase.initializeApp(config)

export { firebase }
