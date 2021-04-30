import React from 'react'

const Mail = props => {

    return (
        <>
            <div className="content-header">
                <p className="content-header-text">inbox</p>
            </div>
            <div className="content-header-refresh">
                <p onClick={props.refreshHandler} className="content-header-refresh-text">refresh</p>
            </div>
            <div>
            </div>
            <div className="content-mail">
                {props.userMail !== undefined ? props.userMail.map(mail => (
                    <div onClick={() => props.mailClickHandler(mail)} key={mail._id} className="content-mail-obj">
                        <p className="content-mail-obj-from">{mail.from}</p>
                        <p className="content-mail-obj-title">{mail.title}</p>
                        <p className="content-mail-obj-date">{mail.dateSent}</p>
                    </div>
                )) : null}
            </div>

        </>
    )
}

export default Mail