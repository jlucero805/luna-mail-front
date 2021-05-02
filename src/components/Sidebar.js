import React from 'react'
import logo from '../static/svg/crescent-moon-moon-svgrepo-com.svg'

const Sidebar = props => {

  const newMailClickHandler = () => {
    return props.newMailClickHandler("newMail")
  }

  return (
    <>
      <div className="sidebar">
        <img src={logo} className="sidebar-logo"></img>
        <div onClick={newMailClickHandler} className="new-mail-btn bar-btn">
          <p className="btn-text">New Mail</p>
        </div>
        <div onClick={() => props.inboxClickHandler()} className="inbox-btn bar-btn">
          <p className="btn-text">Inbox</p>
        </div>
        <div onClick={() => props.sentMailClickHandler()} className="sent-btn bar-btn">
          <p className="btn-text">Sent</p>
        </div>
        <div className="contacts-btn bar-btn">
          <p className="btn-text">Contacts</p>
        </div>
        <div onClick={props.logoutClickHandler} className="logout-btn bar-btn">
          <p className="btn-text">Logout</p>
        </div>
        {/* //make content component */}
      </div>
    </>
  )
}

export default Sidebar