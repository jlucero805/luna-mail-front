import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
const Main = props => {

    const [page, setPage] = useState("mail")

    const newMailClickHandler = val => {
        setPage(val)
    }

    const returnClickHandler = () => {
        setPage('mail')
    }

    const mailClickHandler = () => {
        setPage('mailDetail')
    }

    const inboxClickHandler = () => {
        setPage('mail')
    }
    return (
        <>
            <div className="main">
                {/* //make side bar component */}
                <Sidebar inboxClickHandler={inboxClickHandler} newMailClickHandler={newMailClickHandler} />
                <Content inboxClickHandler={inboxClickHandler} refreshHandler={props.refreshHandler} user={props.user} mailClickHandler={mailClickHandler} returnClickHandler={returnClickHandler} page={page} userMail={props.userMail}/>
            </div>
        </>
    )
}

export default Main