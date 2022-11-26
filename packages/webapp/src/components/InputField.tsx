import { Input, Form } from "antd";
import { Field, FieldProps } from "formik";

interface Props {
  name: string;
  label: string;
  rule: any;
  type: string;
}

const InputField = ({ name, label, rule, type = "text" }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <Form.Item
          name={field.name}
          label={label}
          rules={[rule]}
          hasFeedback
          validateStatus={meta.error && "error"}
        >
          <Input type={type} onChange={field.onChange} />
        </Form.Item>
      )}
    </Field>
  );
};

export default InputField;
