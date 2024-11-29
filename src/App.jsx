import { useState } from 'react'
import Navhead from './components/Navhead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navhead />
    </div>


  )
}

export default App
