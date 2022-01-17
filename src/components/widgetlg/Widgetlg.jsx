import "./widgetlg.css"

export default function Widgetlg() {
    const Button=({type})=>{
        return <button className={"widgetlgbutton "+ type}>{type}</button>
    }
    return (
        <div className="widgetlg">
            <h3 className="widgetlgtitle">Latest Transactions</h3>
            <table className="widgetlgtable">
                <tr className="widgetlgtr">
                    <th className="widgetlgth">Customer</th>
                    <th className="widgetlgth">Date</th>
                    <th className="widgetlgth">Amount</th>
                    <th className="widgetlgth">Status</th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Preyrana Mishra</span>
                    </td>
                    <td className="widgetlgdate">18th Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Preyrana Mishra</span>
                    </td>
                    <td className="widgetlgdate">18th Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Preyrana Mishra</span>
                    </td>
                    <td className="widgetlgdate">18th Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  alt="" className="widgetlgimg" />
                        <span className="widgetlgname">Preyrana Mishra</span>
                    </td>
                    <td className="widgetlgdate">18th Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgstatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
