import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {lineChatData} from "./ImportData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function LineGraph() {

    const options = {};

    return (
        <div style={{width: '400px', height: '300px'}}>
            <Line options={options} data={lineChatData}/>
        </div>
    )
}

export {LineGraph};