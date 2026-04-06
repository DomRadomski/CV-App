import { useState } from 'react'
import './App.css'
import Form from './Form'
import CV from './CV'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [cvData, setCVData] = useState({
    name: '',
    email: '',
    phone: '',
    uni: '',
    uniCourse: '',
    uniDate: '',
    company: '',
    position: '',
    posFrom: '',
    posTo: ''
  })

  return (
    <>
      {!submitted && <Form data={cvData} setData={setCVData} setSubmitted={setSubmitted}/>}
      {submitted && <CV data={cvData}/>}
    </>
  )
}

export default App
