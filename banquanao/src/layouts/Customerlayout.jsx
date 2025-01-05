import React from "react";
import { Layout, Menu, Button, Row, Col, Card } from "antd";
import { ShoppingCartOutlined, PhoneOutlined, InfoCircleOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";

const { Header, Content, Footer } = Layout;

const products = [
  { id: 1, name: "Sản phẩm A", price: "200,000 VND", description: "Mô tả ngắn về sản phẩm A" },
  { id: 2, name: "Sản phẩm B", price: "350,000 VND", description: "Mô tả ngắn về sản phẩm B" },
  { id: 3, name: "Sản phẩm C", price: "500,000 VND", description: "Mô tả ngắn về sản phẩm C" },
];

const CustomerPage = () => {
  return (
    <Layout>
      {/* Header */}
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "16px" }} />
          <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Cửa hàng của bạn</span>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Sản phẩm</Menu.Item>
          <Menu.Item key="3">Liên hệ</Menu.Item>
        </Menu>
      </Header>

      {/* Content */}
      <Content style={{ padding: "24px", background: "#f0f2f5" }}>
        <h2 style={{ textAlign: "center" }}>Chào mừng đến với cửa hàng của chúng tôi!</h2>
        <Row gutter={16}>
          {products.map((product) => (
            <Col key={product.id} span={8}>
              <Card
                title={product.name}
                bordered={false}
                extra={<Button type="primary" icon={<ShoppingCartOutlined />}>Mua ngay</Button>}
              >
                <p><strong>Giá:</strong> {product.price}</p>
                <p>{product.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        <Row gutter={[16, 16]} justify="center">
          <Col>
            <Button type="link" icon={<PhoneOutlined />}>Hỗ trợ khách hàng</Button>
          </Col>
          <Col>
            <Button type="link" icon={<InfoCircleOutlined />}>Giới thiệu</Button>
          </Col>
        </Row>
        <p>© 2024 Cửa hàng của bạn. Bảo lưu mọi quyền.</p>
      </Footer>
    </Layout>
  );
};

export default CustomerPage;
