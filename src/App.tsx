import './App.css';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import Home from './pages/Home';
import { Link, Routes, Route } from 'react-router-dom';
import routes from './routes';

const { Sider, Header, Content } = Layout;

function App() {
  const [selectedPath, setSelectedPath] = useState('')
  return (
    <Layout>
      <Sider collapsedWidth="0">
        <img src="https://www.itheima.com/images/logo.png" className='page-logo' alt="" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['main-app']}
          selectedKeys={[selectedPath || 'main-app']}
          onClick={({ key }) => setSelectedPath(key)}
        >
          {
            routes.filter((item) => item.showMenu).map(route => {
              return (
                <Menu.Item key={route.key}>
                  <Link to={route.path}>
                    {route.title}
                  </Link>
                </Menu.Item>
              );
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', height: '100%', background: '#fff', padding: '24px' }}>
          {/* 主应用渲染区域 */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* 子应用渲染区域 */}
          <div id='sub-app'></div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
