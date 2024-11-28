import { useState } from 'react'
import Navhead from './components/navhead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navhead />
    </div>


  )
}

export default App
