import "./sidebar.css"
import {
LineStyle, Timeline, TrendingUp,PersonOutline,ShoppingBasket,AttachMoney,Equalizer,AlternateEmailOutlined,MessageOutlined,SendOutlined,
WhatsApp,HomeWorkOutlined,ReportProblemOutlined,GroupAddOutlined
}from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <Link to="/" className="link" >
                        <li className="sidebarlistitem">
                            <LineStyle className="sidebaricon" />
                            home
                        </li>
                        </Link>
                        <li className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TrendingUp className="sidebaricon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <Link to="/users" className="link">
                        <li className="sidebarlistitem">
                            <PersonOutline className="sidebaricon" />
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarlistitem">
                            <ShoppingBasket className="sidebaricon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarlistitem">
                            <AttachMoney className="sidebaricon"/>
                            Transactions
                        </li>
                        <li className="sidebarlistitem">
                            <Equalizer className="sidebaricon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <AlternateEmailOutlined className="sidebaricon" />
                            Mail
                        </li>
                        <li className="sidebarlistitem">
                            <MessageOutlined className="sidebaricon"/>
                            Feedback
                        </li>
                        <li className="sidebarlistitem">
                            <SendOutlined className="sidebaricon"/>
                            Messages
                        </li>
                        <li className="sidebarlistitem">
                            <WhatsApp className="sidebaricon"/>
                            Contact Clients
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Access</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <HomeWorkOutlined  className="sidebaricon" />
                            Manage
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <ReportProblemOutlined className="sidebaricon"/>
                            Report
                        </li>
                        <li className="sidebarlistitem">
                            <GroupAddOutlined className="sidebaricon"/>
                            Sceheduled Meetings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
