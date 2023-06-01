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
        pname: 'PC1',
        description: '23"',
        category: 'pc',
        price: 25000000,
        status:0,
    },
    {
        key: '2',
        pname: 'PC2',
        description: '23"',
        category: 'pc',
        price: 25000000,
        status:0,
    },   {
        key: '3',
        pname: 'PC3',
        description: '23"',
        category: 'pc',
        price: 25000000,
        status:0,
    },   {
        key: '4',
        pname: 'PC4',
        description: '23"',
        category: 'pc',
        price: 25000000,
        status:0,
    },
];

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const Product = () => {

    const [dataTable, setDataTable] = useState(data);
    const addUser=(user)=>{
        console.log('----------------------')
        const newData = dataTable.concat([{
            key: Math.floor(Math.random() * 10000) + 1,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            address: user.address,
            tags: ["cool", "teacher"],
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
                                    name="firstName"
                                    label="First name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="age"
                                    label="Age"
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
                                        {/* <SubmitButton form={form} /> */}
                                        <Button htmlType="submit" >Submit</Button>
                                        <Button htmlType="reset">Reset</Button>
                                    </Space>
                                </Form.Item>
                               
                            </Form>

                        </Modal>
                    </>
                    <Table dataSource={dataTable}>

                        <Column title="Product Name" dataIndex="pname" key="name" sorter={{
                            compare: (a, b) => a.pname > b.pname
                        }} />
                        <Column title="Description" dataIndex="description" key="description" />

                        <Column title="Category" dataIndex="category" key="category" />
                        <Column title="Price" dataIndex="price" key="price" sorter={{
                            compare: (a, b) => a.price > b.price
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
                            key="action"
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
    )
}
export { Product }