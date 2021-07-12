import {
    Button,
    Form,
    Popconfirm,
    Table,
    Typography,
} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../Redux/User/UserActions";
import { EditableCell } from "../OrdersTable/EditableCell";

const UsersTable = ({ users }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [data, setData] = useState(users)
    
    const [editingKey, setEditingKey] = useState("");

    const isEditing = (record) => record._id === editingKey;

    const handleSelectChange = () => { };

    const edit = (record) => {
        form.setFieldsValue({
            name: "",
            email: "",
            role: "",
            ...record,
        });
        setEditingKey(record._id);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const handleDelete = (record) => {
        dispatch(deleteUser(record._id));
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item._id);
            
            // TODO -> Need fixing in backend code for update user functionality
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });

                const editingCell = newData[index];
                const editedData = {
                    ...editingCell,
                    name: row.name,
                    email: row.email,
                    role: row.role,
                };
                setData(newData);
                setEditingKey("");
                dispatch(updateUser(editedData));
            } else {
                newData.push(row);
                setData(newData);
                dispatch(updateUser(newData));
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "25%",
            editable: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "30%",
            key: "email",
            editable: true,
        },
        {
            title: "Role",
            dataIndex: "role",
            width: "20%",
            key: "role",
            editable: true,
        },
        {
            title: "Update",
            dataIndex: "operation",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            onClick={() => save(record._id)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link
                        disabled={editingKey !== ""}
                        onClick={() => edit(record)}
                    >
                        Edit
                    </Typography.Link>
                );
            },
        },
        {
            title: "Action",
            dataIndex: "delete",
            render: (_, record) => {
                return <Button onClick={() => handleDelete(record)}>Delete</Button>;
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType:
                    col.dataIndex === "name"
                        ? "text"
                        : col.dataIndex === "email"
                            ? "text"
                            : col.dataIndex === "role"
                                ? "select"
                                : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                    pageSize: 5,
                }}
            />
        </Form>
    );
};

export default UsersTable;