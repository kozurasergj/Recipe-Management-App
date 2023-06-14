import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';

const { Header, Content, Footer } = Layout;

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  const [current, setCurrent] = useState('mail');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'My Recipes',
      key: 'myrecipes',
    },
    {
      label: 'Favourites Recipes',
      key: 'favourites',
    },
  ];

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu onClick={onClick}  mode="horizontal" items={items} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Wrapper;