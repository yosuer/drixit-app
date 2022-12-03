import { Avatar, Button, Col, Row } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DashboardPage = () => {
  const auth = useContext(AuthContext);

  return (
    <Row justify="space-around">
      <Col>
        <span>Dashboard</span>
      </Col>
      <Col>
        <Avatar src={auth.user.avatar} />
        <Button type="primary" onClick={() => auth.signout()}>
          Logout
        </Button>
      </Col>
    </Row>
  );
};

export default DashboardPage;
