import React, {useState} from 'react'
import service from '../../services/service'

const NewMail = props => {

    const returnClickHandler = () => {
        return props.returnClickHandler()
    }

    const mailBodyChanger = e => {
        return props.mailBodyChanger(e)
    }
    const recipientChanger = e => {
        return props.recipientChanger(e)
    }
    const titleChanger = e => {
        return props.titleChanger(e)
    }

    const sendMailHandler = async () => {
        const allUsers = await service.getter('/api/users')
        if (allUsers.data.find(user => user.username === props.rval)) {
            return props.mailSender()
        } else {
            alert(`that user does not exist`)
        }
    }
    
    return (
        <>
            <div className="content-new-mail-header">
                <p className="content-new-mail-header-recipient">recipient:</p><input value={props.rval} onChange={e => recipientChanger(e.target.value)} className="content-new-mail-recipient-input"></input>
            </div>
            <div className="content-new-mail-header">
                <p className="content-new-mail-header-title">title:</p><input value={props.tval} onChange={e => titleChanger(e.target.value)} className="content-new-mail-recipient-input"></input>
            </div>
            <div className="content-new-mail-navbar">
                <div onClick={sendMailHandler} className="content-new-mail-btn">send</div>
                <div onClick={returnClickHandler} className="content-new-mail-btn">return</div>
            </div>
            <textarea value={props.val} onChange={e => mailBodyChanger(e.target.value)} className="content-new-mail-input"/>
        </>
    )
}

export default NewMail