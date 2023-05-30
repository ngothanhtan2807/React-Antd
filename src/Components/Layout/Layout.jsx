import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, DashboardOutlined, CustomerServiceOutlined, GiftOutlined, OrderedListOutlined, GiftTwoTone } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Logo } from 'Components/Logo';
import { NavLink } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
import { Header } from 'Components/Header';
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
function getItem(label, key, icon, children,) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to='/'>Dashboard</NavLink>, 'sup1', <DashboardOutlined />, [
    getItem(<NavLink to='/'>'User'</NavLink>, "1.1",),
    getItem(<NavLink to='/'>Product</NavLink>, "1.2",),
    getItem(<NavLink to='/'>Order</NavLink>, "1.3",),
    getItem(<NavLink to='/'>Chart</NavLink>, "1.4",),
  ]),
  getItem(<NavLink to='/user'>User</NavLink>, '2', <UserOutlined />,),
  getItem(<NavLink to='/'>Customer</NavLink>, '3', <CustomerServiceOutlined />,),
  getItem(<NavLink to='/'>Product</NavLink>, '4', <GiftOutlined />,),
  getItem(<NavLink to='/'>Order</NavLink>, '5', <OrderedListOutlined />,),
  getItem(<NavLink to='/'>Coupon</NavLink>, '6', <GiftTwoTone />,)
];
const PrimaryLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Logo></Logo>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} > 
          

          </Menu>
      </Sider>
      <Layout>
        <Header>

        </Header>
        {children}
   
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export { PrimaryLayout }; 