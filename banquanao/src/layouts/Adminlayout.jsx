import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AreaChartOutlined,
  BarChartOutlined,
  BranchesOutlined,
  CloseCircleOutlined,
  ContainerOutlined,
  ControlOutlined,
  DatabaseOutlined,
  DownOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  SafetyOutlined,
  ScheduleOutlined,
  UserOutlined,
  HeatMapOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, Space, theme, Tag } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { setActiveKey, toggleSidebar } from "@redux/features/sidebarMenuSlice";
// import logo2 from "../assets/logo2.svg";
import WelcomeMessage from "./WelcomeLayout";


const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    dispatch(setActiveKey(location.pathname));
  }, [location.pathname, dispatch]);

  // Handle menu click
  const handleMenuClick = ({ key }) => {
    dispatch(setActiveKey(key));
    navigate(key);
  };

  // Handle logout (bỏ qua Redux)
  const handleLogout = () => {
    navigate("/login");
  };

  const items = [
    {
      label: (
        <Button onClick={handleLogout} style={{ width: "100%" }}>
          Logout
        </Button>
      ),
      key: "0",
      style: { textAlign: "center" },
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        theme="light"
        width={270}
      >
        <div style={{ textAlign: "center", padding: "16px" }}>
          <img
            src={collapsed ? logo2 : logo}
            alt="logo"
            className="primary-logo"
            style={{ maxWidth: collapsed ? "32px" : "120px", height: "auto" }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          defaultOpenKeys={collapsed ? [] : ["1", "2", "3", "4"]}
          triggerSubMenuAction="hover"
          items={[
            {
              key: "1",
              icon: <LineChartOutlined />,
              label: "Biểu đồ",
              children: [
                { key: "/dashboard/all", icon: <BarChartOutlined />, label: "Biểu đồ Tổng" },
                { key: "/dashboard/module", icon: <AreaChartOutlined />, label: "Biểu đồ Chuyền" },
                { key: "/dashboard/ware", icon: <AreaChartOutlined />, label: "Biểu đồ Kho" },

              ],
            },
            {
              key: "2",
              icon: <ControlOutlined />,
              label: "Quản lý sản phẩm",
              children: [
                { key: "/manage/category", icon: <MenuOutlined />, label: "Quản lý danh mục" },
                { key: "/manage/product", icon: <ContainerOutlined />, label: "Quản lý sản phẩm" },
              ],
            },
            // Add more menu items as needed
          ]}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 270, transition: "all 0.2s" }}>
        <Header
          style={{
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispatch(toggleSidebar())}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />

          <Dropdown
            menu={{ items }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()} style={{ color: "black" }}>
              <Space>
                <Avatar size="large" src="https://i.pravatar.cc/300" />
                Hi, User
                <Tag color="blue">Admin</Tag>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 112px)",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "scroll",
          }}
        >
          {location.pathname === "/" ? <WelcomeMessage /> : <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
