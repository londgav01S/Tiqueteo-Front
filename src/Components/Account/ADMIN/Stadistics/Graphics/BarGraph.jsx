import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {lineChatData} from "./ImportData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function BarGraph() {

    const options = {};

    return (
        <div style={{width: '400px', height: '300px'}}>
            <Bar options={options} data={lineChatData}/>
        </div>
    )
}

export {BarGraph};