import { useState } from "react";
import { Button, Col, Form, Row } from "antd";
import { Formik } from "formik";
import { Divider } from "antd";
import * as Yup from "yup";
import InputField from "../../../components/InputField";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormLogin = () => {
  const [showInputPassword, setShowInputPassword] = useState(false);
  const yupSync = {
    validator: async ({ field }: any, value: any) => {
      schema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <Row align="middle" justify="center" gutter={16} className="FormContainer">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({ handleSubmit, errors, values, isValid }) => {
          return (
            <Form layout="vertical" onFinish={handleSubmit}>
              <Col xs={24}>Log in to your account</Col>
              <Divider />
              <Col xs={24}>
                <InputField
                  name="email"
                  label="Email Address"
                  rule={yupSync}
                  type="email"
                />
              </Col>
              {showInputPassword ? (
                <>
                  <Col xs={24}>
                    <InputField
                      name="password"
                      label="Password"
                      rule={yupSync}
                      type="password"
                    />
                  </Col>
                  <Col xs={24}>
                    <Button
                      htmlType="submit"
                      type="primary"
                      disabled={!isValid}
                    >
                      Login
                    </Button>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={24}>
                    <Button
                      type="dashed"
                      disabled={!values.email || !!errors.email}
                      onClick={() => setShowInputPassword(true)}
                    >
                      Next
                    </Button>
                  </Col>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </Row>
  );
};

export default FormLogin;
