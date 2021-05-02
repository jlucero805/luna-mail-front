import React, {useState} from 'react'
import Mail from './Content/Mail'
import MailDetail from './Content/MailDetail'
import NewMail from './Content/NewMail'
import SentMail from './Content/SentMail'
import service from '../services/service'


const Content = props => {
    const page = props.page
    const [mail, setMail] = useState({})
    //mail state from new mail
    const [recipient, setRecipient] = useState('')
    const [mailBody, setMailBody] = useState(() => '')
    const [mailTitle, setMailTitle] = useState(() => '')



    const returnClickHandler = () => {
        return props.returnClickHandler()
    }

    const mailClickHandler = mailObject => {
        console.log(mailObject)
        setMail(mailObject)
        return props.mailClickHandler()
    }

    const mailBodyChanger = e => {
        console.log(e)
        setMailBody(e)
    }
    const recipientChanger = e => {
        console.log(e)
        setRecipient(e)
    }
    const titleChanger = e => {
        console.log(e)
        setMailTitle(e)
    }

    const mailSender = async () => {
        const newMail = { 
            from: props.user.username,
            to: recipient,
            title: mailTitle,
            content: mailBody,
            dateSent: new Date()
        }
        const posted = service.poster('/api/mail', newMail)
        console.log(posted.data)
        setRecipient('')
        setMailBody('')
        setMailTitle('')
        return props.inboxClickHandler()
    }

    if (page === 'mail') {
        return (
            <div className="content">
                <Mail refreshHandler={props.refreshHandler} mailClickHandler={mailClickHandler} userMail={props.userMail}/>
            </div>
        )
    } else if (page === 'mailDetail') {
        return (
            <div className="content">
                <MailDetail mail={mail} />
            </div>
        )
    } else if (page === 'newMail') {
        return (
            <div className="content">
                <NewMail titleChanger={titleChanger} mailSender={mailSender} recipientChanger={recipientChanger} tval={mailTitle} rval={recipient} val={mailBody} mailBodyChanger={mailBodyChanger} returnClickHandler={returnClickHandler} />
            </div>
        )
    } else if (page === 'sentMail') {
        return (
            <div className="content">
                <SentMail />
            </div>
        )
    }

}

export default Content