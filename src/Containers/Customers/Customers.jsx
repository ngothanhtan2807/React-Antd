import Layout from "antd/es/layout/layout"
import { PrimaryLayout } from "Components/Layout";
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, DashboardOutlined, CustomerServiceOutlined, GiftOutlined, OrderedListOutlined, GiftTwoTone } from '@ant-design/icons';
import { Breadcrumb, Menu, theme } from 'antd';
import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import React from 'react';
const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        cname: 'Customer1',
        email: 'cus1@email.com',
        total: 25000000,
        address:'hcm',
        status:1,
    },
    {
        key: '2',
        cname: 'Customer2',
        email: 'cus2@email.com',
        total: 25000000,address:'hcm',
        status:1,
    }, {
        key: '3',
        cname: 'Customer3',
        email: 'cus1@email.com',
        total: 25000000,address:'hcm',
        status:1,
    }, {
        key: '4',
        cname: 'Customer4',
        email: 'cus4@email.com',
        total: 25000000,address:'hcm',
        status:1,
    },
];

const { Content, Footer, Sider } = Layout;


const Customer = () => {

    const [dataTable, setDataTable] = useState(data);
    const addUser=(user)=>{
        console.log('----------------------')
        const newData = dataTable.concat([{
            key: Math.floor(Math.random() * 10000) + 1,
            cname: user.cname,
            total: user.total,
            address: user.address,
            status: 1,
          }]);
          console.log(newData)
          setDataTable(newData);
    }
    const SubmitButton = ({ form }) => {
        const [submittable, setSubmittable] = React.useState(false);
    
        // Watch all values
        const values = Form.useWatch([], form);
        React.useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(
                    () => {
                        setSubmittable(true);
                      
                    },
                    () => {
                        setSubmittable(false);
                    },
                );
        }, [values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable} >
                Submit
            </Button>
        );
    };
    //data
    
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //form
    const [form] = Form.useForm();

    return (
        // <PrimaryLayout>
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        // background: colorBgContainer,
                    }}
                >
                    <>
                        <Button type="primary" onClick={showModal}>
                            Open Modal
                        </Button>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            {/* modal */}
                            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onSubmit={addUser}>
                                <Form.Item
                                    name="cname"
                                    label="Customer name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="total"
                                    label="Total"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    label="Address"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Space>
                                        <SubmitButton form={form} />
                                        {/* <Button htmlType="submit" >Submit</Button> */}
                                        <Button htmlType="reset">Reset</Button>
                                    </Space>
                                </Form.Item>
                               
                            </Form>

                        </Modal>
                    </>
                    <Table dataSource={dataTable}>

                        <Column title="Customer Name" dataIndex="cname" key="cname" sorter={{
                            compare: (a, b) => a.cname > b.cname
                        }} />
                        <Column title="Email" dataIndex="email" key="key" />

                        <Column title="Total" dataIndex="total" key="category" />
                        <Column title="Address" dataIndex="address" key="price" sorter={{
                            compare: (a, b) => a.address > b.address
                        }} />
                        <Column
                            title="Status"
                            dataIndex="status"
                            key="status"
                            // render={(tags) => (
                            //     <>
                            //         {tags.map((tag) => (
                            //             <Tag color="blue" key={status}>
                            //                 {status}
                            //             </Tag>
                            //         ))}
                            //     </>
                            // )}
                        />
                        <Column
                            title="Action"
                            key="key"
                            render={(_, record) => (
                                <Space size="middle">
                                    <a>Edit</a>
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>
                </div>
            </Content>
        // </PrimaryLayout>
    )
}
export { Customer }