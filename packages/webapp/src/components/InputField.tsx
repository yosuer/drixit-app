import { Input, Form } from "antd";
import { Field, FieldProps } from "formik";

interface Props {
  name: string;
  label: string;
  rule: any;
  type: string;
  autoComplete: string;
}

const InputField = ({
  name,
  label,
  rule,
  type = "text",
  autoComplete,
}: Props) => {
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
          <Input
            type={type}
            onChange={field.onChange}
            autoComplete={autoComplete}
          />
        </Form.Item>
      )}
    </Field>
  );
};

export default InputField;
