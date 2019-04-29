import React from 'react'
import cogsSvg from '../assets/floating-cogs.svg'
import './app.scss'

console.log(cogsSvg)
const App = () => {
  const dataUri = `url("data:image/svg+xml,${encodeURIComponent(cogsSvg)}")`

  return <div className="page-container">hello</div>
}

export default App
