import { useEffect, useState } from 'react'
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { AppleFilled } from '@ant-design/icons'
import { getMenuList } from '../service/resource'
import '../css/home.css'
const { Header, Content, Footer, Sider } = Layout;

/**
 * 初始化面包屑Map
 * @param {} menus 
 * @returns 
 */
function initCrumbMap(menus) {
  const result = {}
  if (menus.length) {
    menus.forEach(item => {
      result[item.key] = item.crumblabel
      if (item.children && item.children.length) {
        const children = initCrumbMap(item.children, item.key)
        Object.keys(children).forEach(k => {
          result[k] = children[k]
        })
      }
    })
  }
  return result
}

export default function Home() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenuList(setMenus)
  }, [])
  const [collapsed, setCollapsed] = useState(false);
  const naviate = useNavigate()
  const menuClick = (e) => {
    const { key } = e
    naviate(key)
  }
  const crumbMap = initCrumbMap(menus)
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link className='crumbItem' to={url}>{crumbMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link className='crumbItem' to="/">首页</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(val) => setCollapsed(val)}>
        <div className='logo'>
          <AppleFilled style={{ fontSize: '32px', textAlign: 'center' }} />
        </div>
        <Menu items={menus} mode="inline" onClick={menuClick} theme='dark' defaultSelectedKeys={"/dashboard"} />
      </Sider>
      <Layout>
        <Header className='header'>
          <Breadcrumb className='crumb' items={breadcrumbItems} />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', fontWeight: 'bold' }}>Ant Design</Footer>
      </Layout>
    </Layout>
  )
}
