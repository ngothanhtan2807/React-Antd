import React, { useState, useEffect } from 'react';
const { Line } = require("@ant-design/plots");


    const PriceChart = ()=>{
        const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    
    const config = {
        data,
        // color:['#610514','#e28b20'],
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
        color: 'l(0) 0:#9747FF 1:#14F4C9'
    };
        return(
            <Line {...config} />
        )
    }
    export {PriceChart}