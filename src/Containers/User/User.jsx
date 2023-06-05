import Layout from "antd/es/layout/layout"
import { PrimaryLayout } from "Components/Layout";
import { Breadcrumb, Menu, Popconfirm } from 'antd';
import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { Space, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector, useStore } from "react-redux";
import { NavLink } from "react-router-dom";
// import store from "store";
const { Column } = Table;

const { Content } = Layout;



const User = () => {
    const usersStore = useSelector((state) => state.users);
    const userSelected = useSelector((state) => state.users.selectedUser);




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
    const SaveButton = ({ form }) => {
        const [submittable1, setSubmittable1] = React.useState(false);

        const values = Form.useWatch([], form);
        const handleEdit = () => {
            console.log(values);
            editUser(usersStore.selectedUser, values)
        }

        React.useEffect(() => {
            form
                .validateFields({
                    // validateOnly1: true,
                })
                .then(
                    () => {
                        setSubmittable1(true);

                    },
                    () => {
                        setSubmittable1(false);
                    },
                );
        }, [values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable1} onClick={handleEdit}>
                Save
            </Button>
        );
    };

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
    const handleDelete = (record) => {
        console.log('key:' + record.id)
        const newData = usersStore.listUser.filter((item) => item.id !== record.id);
        dispatch.users.setListUser(newData);
    }

    const editUser = (user, value) => {

        console.log("user:")
        console.log(user)
        // console.log(value)
        const index = usersStore.listUser.findIndex((item) =>
            user.id === item.id
        );
        console.log("index" + index);

        const newUser = {
            id: user.id,
            name: value.name,
            username: value.username,
            email: value.email,
            address: value.address,

        };
        console.log("new user")
        console.log(newUser)
        const newData = usersStore.listUser;

        newData[index] = newUser;
        const copy = newData.map(item => item);
        console.log("newdata")
        console.log(copy)
        dispatch.users.setListUser(copy);
        dispatch.users.setSelectedUser({});
     
        setIsModalOpen1(false);
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


    //
    const [row, setRow] = useState({});

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const showModal1 = (record) => {
    
        formEdit.setFieldsValue({ ...record })

        setIsModalOpen1(true);

    };

    // const handleOk1 = () => {
    //     setIsModalOpen1(false);
    // };
    const handleCancel1 = () => {
        console.log("CANCEL");
        setIsModalOpen1(false);

    };
    //form
    const [form] = Form.useForm();
    const [formEdit] = Form.useForm();
    const a = { name: "ABC", username: "adlsh" }
    const hasValue = formEdit.getFieldValue();
    console.log(hasValue)
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
                <Breadcrumb.Item><NavLink to ="/" >Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to ="/user" >User</NavLink></Breadcrumb.Item>
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
                                    <Button htmlType="reset" autoFocus>Reset</Button>
                                </Space>
                            </Form.Item>

                        </Form>

                    </Modal>
                    <Modal title="Edit user" open={isModalOpen1} onCancel={() => handleCancel1()} footer={null}>
                        {hasValue ? <Form form={formEdit} name="validateOnly1" layout="vertical" autoComplete="off"
                        >

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
                                label="username"
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
                                    <SaveButton form={formEdit} >Save</SaveButton>
                                    <Button htmlType="reset">Reset</Button>
                                </Space>
                            </Form.Item>

                        </Form> : <div>Loading</div>}

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

                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">

                                <a onClick={() => {
                                    dispatch.users.setSelectedUser(record);
                                    console.log(usersStore.selectedUser); showModal1(record)
                                }
                                }
                                >Edit</a>
                                <Popconfirm title="Sure to delete???" onConfirm={() => { handleDelete(record) }}>
                                    <a on>Delete</a>
                                </Popconfirm>
                            </Space>

                        )}
                    />

                </Table>
            </div>
        </Content >
        // </PrimaryLayout>
    )
}
export { User }