import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import { Option } from "antd/lib/mentions";

export const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : inputType === "select" ? (
      <Select>
        <Option value="Pending">Pending</Option>
        <Option value="Delivered">Delivered</Option>
        <Option value="On Going">On Going</Option>
        <Option value="Approved">Approved</Option>
      </Select>
    ) : (
      <Input />
    );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
