import { createSignal } from 'solid-js'

const App = () => {
  const [text] = createSignal('Wow this is my app!')  
  return (
    <div>{text}</div>
  )
}

export {
App
}