import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings}from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className='logo'>Roseadmin</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                        <NotificationsNone/>
                        <spam className="topiconbag">2</spam>
                    </div>
                    <div className="topbariconcontainer">
                        <Language/>

                    </div>
                    <div className="topbariconcontainer">
                        <Settings/>

                    </div>
                    <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="topavatar" />
                </div>
            </div>
        </div>
    )
}
