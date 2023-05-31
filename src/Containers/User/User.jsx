import Layout from "antd/es/layout/layout"
import { PrimaryLayout } from "Components/Layout";
import { Breadcrumb, Menu, Popconfirm, theme } from 'antd';
import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
const { Column, ColumnGroup } = Table;

// const data = [
//     {
//         key: '1',
//         firstName: 'John',
//         lastName: 'Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         firstName: 'Jim',
//         lastName: 'Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         firstName: 'Joe',
//         lastName: 'Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const User = () => {
    const usersStore = useSelector((state) => state.users);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch.users.fetchUsers();
    }, [])

    const SubmitButton = ({ form }) => {
        const [submittable, setSubmittable] = React.useState(false);

        // Watch all values
        const values = Form.useWatch([], form);

        const handleSubmit = () => {
            addUser(values);
        }

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
            <Button type="primary" htmlType="submit" disabled={!submittable} onClick={handleSubmit}>
                Submit
            </Button>
        );
    };
    //data


    const addUser = (values) => {
        console.log('----------------------')
        console.log(values)
        const newData = [...usersStore.listUser, {
            id: Math.floor(Math.random() * 10000) + 1,
            name: values.name,
            username: values.username,
            email: values.email,
            address: values.address,
            tags: ["cool", "teacher"],
        }];
        console.log(newData)
        dispatch.users.setListUser(newData);
    }
    const handleDelete =(record)=>{
        console.log('key:'+record.id)
        const newData = usersStore.listUser.filter((item)=>item.id != record.id);
        dispatch.users.setListUser(newData);
    }
    const editHandle=(record)=>{
        const item = usersStore.listUser.find((item)=>item.id == record.id);
        
    }
      
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
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const showModal1 = () => {
        setIsModalOpen1(true);
    };
    const handleOk1 = () => {
        setIsModalOpen1(false);
    };
    const handleCancel1 = () => {
        setIsModalOpen1(false);
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
                    }}
                >
                    <>
                        <Button type="primary" onClick={showModal}>
                            Open Modal
                        </Button>
                        <Modal title="Add user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" >
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="username"
                                    label="Username"
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
                                        <Button htmlType="reset">Reset</Button>
                                    </Space>
                                </Form.Item>

                            </Form>

                        </Modal>
                    </>
                    <Table dataSource={usersStore.listUser}>

                        <Column title="Name" dataIndex="name" key="name" sorter={{
                            compare: (a, b) => a.name > b.name
                        }} />
                        <Column title="Username" dataIndex="username" key="username" />

                        <Column title="Email" dataIndex="email" key="email" />
                        <Column title="Address" dataIndex="address" key="address" sorter={{
                            compare: (a, b) => a.address > b.address
                        }} />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            // render={(tags) => (
                            //     <>
                            //         {tags.map((tag) => (
                            //             <Tag color="blue" key={tag}>
                            //                 {tag}
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
                                    <Popconfirm title="Sure to delete???" onConfirm={()=>{handleDelete(record)}}>
                                    <a on>Delete</a>
                                    </Popconfirm>
                                </Space>
                                
                            )}
                        />
                       
                    </Table>
                </div>
            </Content>
        // </PrimaryLayout>
    )
}
export { User }