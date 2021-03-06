import React, { useState, useEffect } from 'react'
import '../static/css/login.css'
import logo from '../static/svg/crescent-moon-moon-svgrepo-com.svg'
import axios from 'axios'

const url = 'https://agile-garden-69829.herokuapp.com'

const Login = props => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginClickHandler = async () => {
        console.log("clicked")
        const login = {
            username: loginUsername,
            passHash: loginPassword
        }
        const res = await axios.post(`${url}/api/users/login`, login)
        console.log(res.data)
        if (res.data.error === undefined) {
            console.log("not errer")
            console.log("resdata", res.data)
            return props.loginClickHandler(res.data, loginUsername)
        } else if (res.data.error === 'error') {
            setLoginPassword('')
        }
    }

    // const jwtLoginClickHandler = async () => {
    //     console.log("clicked")
    //     const login = {
    //         username: loginUsername,
    //         passHash: loginPassword
    //     }
    //     const config = {
    //         headers: { Authorization: token}
    //     }
    //     const res = await axios.post(`${url}/api/users/login`, login)
    //     console.log(res.data)
    //     if (res.data.error === undefined) {
    //         console.log("not errer")
    //         console.log("resdata", res.data)
    //         return props.loginClickHandler(res.data, loginUsername)
    //     } else if (res.data.error === 'error') {
    //         setLoginPassword('')
    //     }
    // }

    const loginKeyHandler = (e) => {
        if (e.key === "Enter") {
            loginClickHandler()
        }
    }

    const userChangeHandler = val => { setLoginUsername(val) }

    const passChangeHandler = val => { setLoginPassword(val) }

    return (
        <div className="body">
            <div className="login">
                <img src={logo} className="login-logo"></img>
                <p className="logo-text">Luna Mail</p>
                <input placeholder="username..." onFocus={(e) => e.target.placeholder = ''} onBlur={e => e.target.placeholder = "username..."} onChange={(e) => userChangeHandler(e.target.value)} className="login-username"></input>
                <input placeholder="password..." onFocus={(e) => e.target.placeholder = ''} onBlur={e => e.target.placeholder = "password..."} value={loginPassword} onKeyPress={loginKeyHandler} onChange={(e) => passChangeHandler(e.target.value)} type="password" name="password" className="login-password"></input>
                <div onClick={e => loginClickHandler(e.key)} className="login-button">login</div>
            </div>
        </div>
    )
}

export default Login