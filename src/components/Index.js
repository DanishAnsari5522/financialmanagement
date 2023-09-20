import React from 'react';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function Components() {
    return (
        <div className='bg-gray-50'>
            <div className='flex w-screen h-1/2'>
                <div className='grid grid-col-4 grid-flow-col gap-2 w-8/12 flex flex-col p-2'>
                    <div className='w-10/12'>
                        <div className='h-1/3 bg-white text-center'>
                            Test1
                        </div>
                        <div className='h-2/3 bg-white mt-2'>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, },
                                            { id: 1, value: 15, },
                                            { id: 2, value: 20, },
                                        ],
                                    },
                                ]}
                                width={220}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <div className='h-1/3 bg-white text-center'>
                            Test2
                        </div>
                        <div className='h-2/3 bg-white mt-2'>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, },
                                            { id: 1, value: 15, },
                                            { id: 2, value: 20, },
                                        ],
                                    },
                                ]}
                                width={220}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <div className='h-1/3 bg-white text-center'>
                            Test3
                        </div>
                        <div className='h-2/3 bg-white mt-2'>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, },
                                            { id: 1, value: 15, },
                                            { id: 2, value: 20, },
                                        ],
                                    },
                                ]}
                                width={220}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <div className='h-1/3 bg-white text-center items-center'>
                            Test4
                        </div>
                        <div className='h-2/3 bg-white mt-2 items-center text-center self-center' >
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, },
                                            { id: 1, value: 15, },
                                            { id: 2, value: 20, },
                                        ],
                                    },
                                ]}
                                width={220}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-4/12'>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        width={400}
                        height={300}
                    />
                </div>
            </div>
            <div className='flex h-full'>
                <div className='w-1/2  h-1/2'>
                    <LineChart
                        width={500}
                        height={350}
                        series={[
                            { data: pData, label: 'pv', yAxisKey: 'leftAxisId' },
                            { data: uData, label: 'uv', yAxisKey: 'rightAxisId' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                        yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                        rightAxis="rightAxisId"
                    />
                </div>
                <div className='w-1/2  h-1/2'>
                    <BarChart
                        series={[
                            { data: [3, 4, 1, 6, 5], stack: 'A', label: 'series A1' },
                            { data: [4, 3, 1, 5, 8], stack: 'A', label: 'series A2' },
                            { data: [4, 2, 5, 4, 1], stack: 'B', label: 'series B1' },
                            { data: [2, 8, 1, 3, 1], stack: 'B', label: 'series B2' },
                            { data: [10, 6, 5, 8, 9], label: 'series C1' },
                        ]}
                        width={600}
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}
