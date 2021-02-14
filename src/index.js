import { render } from 'react-dom'
import 'normalize.css'
import App from './App'
import { GlobalStyles } from './global-styles'

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

// Building a Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth) | 1:48:36
