import './App.css'
import axios from 'axios'
import { useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState([])

  useEffect(()=>{
    axios.get('/api/user')
    .then(response => {
      setUser(response.data)
    })
  },[])


  return (
    <>
    <h1>User</h1>
    <h3>UserName: {user.name}  Age: {user.age}</h3>


  
    </>
  )
}

export default App
