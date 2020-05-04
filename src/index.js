import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  App from './containers/app'
import { GlobalStyles } from './containers/styles'
import { store } from './redux'



render(
<Provider store={store}>
  <GlobalStyles />
  <App />
</Provider>, document.querySelector('#app'))