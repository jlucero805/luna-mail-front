import React from 'react'

const SentMail = props => {
    return (
        <>
            <div className="content-header">
                <p className="content-header-text">inbox</p>
            </div>
            <div className="content-header-refresh">
                <p onClick={props.refreshHandler} className="content-header-refresh-text">refresh</p>
            </div>
        </>
    )
}

export default SentMail