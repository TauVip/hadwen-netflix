import { render } from 'react-dom'
import 'normalize.css'
import App from './app'
import { GlobalStyles } from './global-styles'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)

// Building a Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth) | 5:27:17
