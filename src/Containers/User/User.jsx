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
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
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
//form 

// const SubmitButton = ({ form }) => {
//     const [submittable, setSubmittable] = React.useState(false);

//     // Watch all values
//     const values = Form.useWatch([], form);
//     React.useEffect(() => {
//         form
//             .validateFields({
//                 validateOnly: true,
//             })
//             .then(
//                 () => {
//                     setSubmittable(true);
//                 },
//                 () => {
//                     setSubmittable(false);
//                 },
//             );
//     }, [values]);
//     return (
//         <Button type="primary" htmlType="submit" disabled={!submittable} onSubmit={{addUser}}>
//             Submit
//         </Button>
//     );
// };

const User = () => {

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
        <PrimaryLayout>
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

                        <Column title="First Name" dataIndex="firstName" key="firstName" sorter={{
                            compare: (a, b) => a.firstName > b.firstName
                        }} />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />

                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" sorter={{
                            compare: (a, b) => a.address > b.address
                        }} />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={(tags) => (
                                <>
                                    {tags.map((tag) => (
                                        <Tag color="blue" key={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={(_, record) => (
                                <Space size="middle">
                                    <a>Invite {record.lastName}</a>
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>
                </div>
            </Content>
        </PrimaryLayout>
    )
}
export { User }