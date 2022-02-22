import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { atom, useAtom } from "jotai";
import Counters from './Counters';
import Surveys from './Survey';
const Atomdes = atom(false);
const Atomcoun = atom(false);
const Atomsuv = atom(false);


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Temp() {

  const [cc, setCc] = useAtom(Atomcoun);

  const[show, setShow] = useAtom(Atomdes);

  const[ss, setSs] = useAtom(Atomsuv);

  // function suv(){
  //   surveys.map(nn) => {

  //   }
  // }
  
  

  return(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Create</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1" onClick={() => setShow(true)}>Description</Menu.Item>
            <Menu.Item key="2" onClick={() => setCc(true)}>Counter</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="3" onClick={() => setSs(true)}>Your Details</Menu.Item>
            <Menu.Item key="4" >option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h1>Welcome to Survey Creator</h1>

          {show ? <h1>Create Survey of your choice</h1> : " " }
          
          {cc ? <Counters /> : " "}

          {ss ? <Surveys /> : " "}
        </Content>
      </Layout>
    </Layout>
  </Layout>
 );
}

export default Temp;

