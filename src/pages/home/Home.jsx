
import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import "./home.css"
import { userData } from "../../dummyData"

export default function Home() {
    return (
        <div className="home">
            <Featured/>
            <Chart data={userData} title="User Analytics" grid dataKey="users"/>
        </div>
    )
}
