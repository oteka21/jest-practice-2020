import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from './redux/reducer'
import initialState from '../initialState.json'

const store = createStore(mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


render(
<Provider store={store}>
  <h1>Hola Perras</h1>
</Provider>, document.querySelector('#app'))