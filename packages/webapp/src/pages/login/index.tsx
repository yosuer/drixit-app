import { Col, Row } from "antd";
import FormLogin from "./components/FormLogin";
import "./index.css";

const LoginPage = () => {
  return (
    <Row className="LoginPage">
      <Col xs={24} md={12} lg={10} xl={6} xxl={4} className="LeftColumn">
        <FormLogin />
      </Col>
      <Col xs={0} md={12} lg={14} xl={18} xxl={20} className="RightColumn">
        Some img
      </Col>
    </Row>
  );
};

export default LoginPage;
