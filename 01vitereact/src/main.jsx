import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactElement = (
  <a href="https://www.google.com/" target='_blank' >Visit Google</a>

)
const anotherUser = 'Hello World'
const reactCreateElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* {reactElement} */}
    {reactCreateElement}
  </React.StrictMode>,
)
