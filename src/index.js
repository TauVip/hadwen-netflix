import { render } from 'react-dom'
import 'normalize.css'
import App from './app'
import { GlobalStyles } from './global-styles'
import { firebase } from './lib/firebase.prod'

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

// Building a Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth) | 3:23:01
