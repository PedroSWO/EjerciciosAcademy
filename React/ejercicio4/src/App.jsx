import { useState } from 'react'
import FunctionComponent from './components/FunctionComponent'
import VariableComponent from './components/VariableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionComponent/>
      <VariableComponent/>
    </>
  )
}

export default App
