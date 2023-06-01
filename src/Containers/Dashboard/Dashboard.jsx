import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import Layout from "antd/es/layout/layout"
import { Card, Space } from 'antd';
const { Content, Footer, Sider } = Layout;
const DashBoard = () => {
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
       
    };

    return (
        <Content>
            <Space>

                <Card style={{ width: 800}}>

                    <Line {...config} />
                </Card>
            </Space>

        </Content>
    )
}
export default DashBoard