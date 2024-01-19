import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

// Components
import RegisterForm from './components/RegisterForm/RegisterForm'
import TableContact from './components/TableContact/TableContact'

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then((res) => {
      setContacts(res.data)
    }).catch((error) => {
      console.log(error) 
    })
  }, [contacts])

  return (
    <>
      <RegisterForm />
      <TableContact contacts={contacts} />
    </>
  )
}

export default App
