import {
    Form,
    Input,
    InputNumber,
    Select
} from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";

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
        inputType === "number"
            ? (<InputNumber />)
            : inputType === "select"
                ? (
                    <Select>
                        <Option value="user">User</Option>
                        <Option value="admin">Admin</Option>
                        <Option value="super">SuperAdmin</Option>
                    </Select>
                )
                : (
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