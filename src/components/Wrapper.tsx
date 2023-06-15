import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

interface IWrapper {
  children?: React.ReactNode;
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
      <Header style={{ display: 'flex', alignItems: 'center',justifyContent:'center',gap:'40px' }}>
        <Link to="/home" >Home</Link >
        <Link to="/favorite" >Favorite</Link >
        <Link to="/create" >Create</Link > 
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Wrapper;