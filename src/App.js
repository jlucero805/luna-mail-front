import React, {useState, useEffect} from 'react'
import './static/css/App.css'
import Main from './components/Main'
import Login from './components/Login'
import crypt from './util/cipher'
import service from './services/service'

function App() {
  const [loggedIn, setLoggedIn] = useState(() => false)
  const [userMail, setUserMail] = useState(() => [])
  const [sentMail, setSentMail] = useState(() => [])
  const [user, setUser] = useState(() => {})
  console.log(crypt.encrypt("hey"))
  const loginClickHandler = async (mail, loginUsername) => {
    setUserMail(mail)
    setLoggedIn(true)

    //fixxxxxxx



    const loggedUser = await service.getter(`/api/users/${loginUsername}`)
    setUser(loggedUser.data)
    console.log("clicked here")
    console.log(loggedUser.data)
  } 

  const refreshHandler = async () => {
    const allMail = await service.getter(`/api/users/allmail/${user.username}`)
    console.log(userMail)
    console.log(allMail.data)
    setUserMail(allMail.data)
  }

  const logoutClickHandler = () => {
    setUserMail([])
    setUser({})
    setLoggedIn(false)
  }

  const sentMailClickHandler = async () => {
    const sentMail = await service.getter(`/api/users/sentmail/${user.username}`)
    setSentMail(sentMail.data)
  }

  if (loggedIn) {
    //mail inbox
    return (
      <Main sentMailClickHandler={sentMailClickHandler} logoutClickHandler={logoutClickHandler} refreshHandler={refreshHandler} user={user} userMail={userMail}/>
    )
  } else if (!loggedIn) {
    return (
      <Login loginClickHandler={loginClickHandler}/>
    )
  }
}

export default App;
