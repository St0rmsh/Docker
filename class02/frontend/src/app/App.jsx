import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get("/api/user")
    .then((response)=>{
      console.log(response.data.data);
      setUser(response.data.data);
       
    })
    
  }, [])

  return (
    <>
    <div>
      <h1>my webstie</h1>
      <h3>User</h3>
      
      {user.map((item)=> (
        <div key={item.name}>
          <p>name: {item.name}</p>
          <p>age: {item.age}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
