import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import Layout from "antd/es/layout/layout"
import { Card, Space } from 'antd';
import { MoneyChart, PriceChart } from 'Components/Chart';
const { Content, Footer, Sider } = Layout;
const DashBoard = () => {


    return (
        <Content>
            <Space>

                <Card style={{ width: 800 }}>
                    <PriceChart></PriceChart>
                </Card>
                <Card>
                    <MoneyChart></MoneyChart>
                </Card>
            </Space>

        </Content>
    )
}
export default DashBoard