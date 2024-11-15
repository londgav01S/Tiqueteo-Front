import {Pie} from 'react-chartjs-2';
import {lineChatData} from "./ImportData";
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
);



function PieGraph() {
    const options= {};

    return (
        <div style={{width: '400px', height: '300px'}}>
            <Pie options={options} data={lineChatData}/>
        </div>
    )
}

export {PieGraph};