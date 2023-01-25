import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["a", "b"])
 
  return (
      <div>
          {messages.length !== 0 && <h1>You have {messages.length} unread messages!</h1>}
      </div>
  )
}

export default App
