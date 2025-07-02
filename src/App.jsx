import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const firstName = "John";
const lastName = "Doe";
const userObj = {
  username: 'jdoe',
  useremail: 'jdoe11@aol.com'
}
function App() {
  return (
    <div className="App">
      <h3>Welcome {firstName} {lastName}!!</h3>
      <p>{userObj.username}</p>
      <p>{userObj.useremail}</p>
    </div>
  )
}

export default App
