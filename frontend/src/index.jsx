import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App.jsx'
import reducer from './reducers/'
import './index.scss'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const SnippetApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default SnippetApp
