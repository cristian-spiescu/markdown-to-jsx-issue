import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Markdown from 'markdown-to-jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Markdown>{
`
|VRAC_T_1|<small>\`🟩-2\`</small> VRAC|<small>🔵<i>end address of original task</i></small><br /><small>\`🟦-1\`</small> F68|<small>🔵<i>parking of \`AF0374\`</i></small><br /><small>\`🟦-6\`</small> E27|
`
      }</Markdown>
    </>
  )
}

export default App
