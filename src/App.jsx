import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './Form'
import CV from './CV'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [cvData, setCVData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <>
      {!submitted && <Form data={cvData} setData={setCVData} setSubmitted={setSubmitted}/>}
      {submitted && <CV data={cvData}/>}
    </>
  )
}

export default App
