import { Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DashboardPage = () => {
  console.log("DashboardPage");
  const auth = useContext(AuthContext);

  return (
    <div>
      <span>Dashboard</span>
      <Button type="primary" color="red" onClick={() => auth.signout()}>
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
