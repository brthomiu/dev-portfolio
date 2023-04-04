import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log("Thanks for visiting my portfolio!")
console.log("View the public repository for this page:")
console.log("https://github.com/brthomiu/dev-portfolio")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
