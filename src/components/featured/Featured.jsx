import "./featured.css"
import {ArrowUpward,ArrowDownward}from '@material-ui/icons'; 

export default function Featured() {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featuredtitle">Revanue</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,560</span>
                    <span className="featuredrate">-11.4 <ArrowDownward className="featuredicon negative" /> </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Sales</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$4,560</span>
                    <span className="featuredrate">-1.4 <ArrowDownward className="featuredicon negative"/> </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Cost</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,220</span>
                    <span className="featuredrate">2.6 <ArrowUpward className="featuredicon "/> </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
        </div>
    )
}
