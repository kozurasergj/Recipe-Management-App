import { Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
import { IWrapper } from '../interfaces';
const { Header, Content, Footer } = Layout;

const Wrapper = ({ children }: IWrapper) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
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