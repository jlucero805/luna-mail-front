import React, {useState, useEffect} from 'react'
import './static/css/App.css'
import Main from './components/Main'
import Login from './components/Login'
import axios from 'axios'

const url = 'https://agile-garden-69829.herokuapp.com'
function App() {
  const [loggedIn, setLoggedIn] = useState(() => false)
  const [userMail, setUserMail] = useState(() => [])
  const [user, setUser] = useState(() => {})
  const loginClickHandler = async (mail, loginUsername) => {
    setUserMail(mail)
    setLoggedIn(true)

    //fixxxxxxx



    const loggedUser = await axios.get(`${url}/api/users/${loginUsername}`)
    setUser(loggedUser.data)
    console.log("clicked here")
    console.log(loggedUser.data)
  } 

  const refreshHandler = async () => {
    const allMail = await axios.get(`${url}/api/users/allmail/${user.username}`)
    console.log(userMail)
    console.log(allMail.data)
    setUserMail(allMail.data)
  }

  const logoutClickHandler = () => {
    setUserMail([])
    setUser({})
    setLoggedIn(false)
  }

  if (loggedIn) {
    //mail inbox
    return (
      <Main logoutClickHandler={logoutClickHandler} refreshHandler={refreshHandler} user={user} userMail={userMail}/>
    )
  } else if (!loggedIn) {
    return (
      <Login loginClickHandler={loginClickHandler}/>
    )
  }
}

export default App;
