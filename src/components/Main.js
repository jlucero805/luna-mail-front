import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import axios from 'axios'
import service from '../services/service'
const Main = props => {

    const [page, setPage] = useState("mail")

    const newMailClickHandler = val => { setPage(val) }

    const returnClickHandler = () => { setPage('mail') }

    const mailClickHandler = () => { setPage('mailDetail') }

    const inboxClickHandler = () => { setPage('mail') }

    const sentMailClickHandler = () => {
        setPage('sentMail')
        return props.sentMailClickHandler()
    }

    return (
        <>
            <div className="main">
                {/* //make side bar component */}
                <Sidebar
                    sentMailClickHandler={sentMailClickHandler}
                    logoutClickHandler={props.logoutClickHandler}
                    inboxClickHandler={inboxClickHandler}
                    newMailClickHandler={newMailClickHandler} />
                <Content
                    inboxClickHandler={inboxClickHandler}
                    refreshHandler={props.refreshHandler}
                    user={props.user}
                    mailClickHandler={mailClickHandler}
                    returnClickHandler={returnClickHandler}
                    page={page}
                    userMail={props.userMail} />
            </div>
        </>
    )
}

export default Main