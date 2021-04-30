import React from 'react'

const MailDetail = props => {
    const mailObject = props.mail
    return (
        <>
            <div className="content-header">
                <p className="content-header-text">{mailObject.title !== undefined ? mailObject.title : null}</p>
            </div>
            <div className="mail-recipient">
                <p className="content-header-text">from: {mailObject.from !== undefined ? mailObject.from : null}</p>
            </div>
            <div className="mail-detail-content">
                <p>{mailObject.content !== undefined ? mailObject.content : null}</p>
            </div>
        </>
    )
}

export default MailDetail