import BarChart from "@/components/BarChart";
import BlockBar from "@/components/BlockBar";
import DoughnutChart from "@/components/DoughnutChart";
import LineChart from "@/components/LineChart";
import PieData from "@/components/PieChart";
import { Users } from "@/database/users"
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {ArrowBigLeft} from "lucide-react"

const Dashboard = () => {
    const [line ,setLine] = useState([])
    const [pie ,setPie] = useState([])
    const [circular ,setCircular] = useState([])
    const [bar ,setBar] = useState([])
    const [block ,setBlock] = useState([])
    const params = useParams();
    const userDetail = Users.filter((item) => item.id.toString() === params.id)[0];
    // console.log(userDetail.bmi);
    // console.log(userDetail.bloodPressure);

    useEffect(() => {
        setLine(userDetail.caloriesLevel);
        setBar(userDetail.bloodPressure);
        setPie(userDetail.diet);
        setCircular(userDetail.bmi);
        setBlock(userDetail.productivity)
    }, []); // Only run on mount
    
    
    return (
        
            <div className="min-h-screen flex flex-col gap-4 mx-10 mt-6">
                <Link to="/">
                    <div className="flex gap-4">
                        <ArrowBigLeft/>
                        <h2 className="font-semibold text-sky-500">
                            Go back
                        </h2>
                    </div>
                </Link>
                <div className="flex flex-col lg:flex-row gap-3">
                    <LineChart line={line}/>
                    <PieData pie={pie}/>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-3 lg:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    <DoughnutChart circular={circular}/>
                    <BarChart bar={bar}/>
                    <BlockBar block={block}/>
                </div>
            </div>
        
    )
}

export default Dashboard
