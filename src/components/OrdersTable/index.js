import {
  Form,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../Redux/Order/OrderActions";
import { EditableCell } from "./EditableCell";


const OrdersTable = ({ orders }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record?._id === editingKey;

  const edit = (record) => {
      form.setFieldsValue({
          status: "",
          ...record,
      });
      setEditingKey(record._id);
  };

  const cancel = () => {
      setEditingKey("");
  };

  const save = async (key) => {
      try {
          const row = await form.validateFields();
          const newData = [...data];
          const index = newData.findIndex((item) => key === item._id);

          if (index > -1) {
              const editingCell = newData[index];
              const editedData = {
                  ...editingCell,
                  status: row.status,
              };
              newData.splice(index, 1, { ...editedData, ...row });
              setData(newData);

              setEditingKey("");
              dispatch(updateOrder(editedData._id, {status: editedData.status}));
          } else {
              newData.push(row);
              dispatch(updateOrder(newData));
              setEditingKey('');
          }
      } catch (errInfo) {
          console.log("Validate Failed:", errInfo);
      }
  };

  const columns = [
      {
          title: "Order Id",
          dataIndex: "_id",
          width: "15%",
          key: "_id",
      },
      {
          title: "Customer",
          children: [
              {
                  title: "Name",
                  render: (record) => record?.customer?.name ? record.customer.name : null,
                  key: "customer",
                  width: "15%",
              },
              {
                  title: "Email",
                  render: (record) => record?.customer?.email ? record.customer.email : null,
                  key: "email",
                  width: "15%",
              }
          ]
      },
      {
          title: "Product",
          children: [
              {
                  title: "Product Title",
                  render: (record) => record?.product?.title ? record.product.title : null,
                  width: "15%",
                  key: "product",
              },
              {
                  title: "Price",
                  render: (record) => record?.product?.price ? record.product.price : null,
                  width: "15%",
                  key: "price",
              },
              {
                  title: "Quantity",
                  dataIndex: "quantity",
                  width: "15%",
                  key: "quantity",
              },
          ]
      },
      {
          title: "Status",
          dataIndex: "status",
          width: "15%",
          key: "status",
          editable: true,
      },
      {
          title: "Operation",
          dataIndex: "operation",
          render: (_, record) => {
              const editable = isEditing(record);
              console.log(record)
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
      // {
      //     title: "Action",
      //     dataIndex: "delete",
      //     render: (_, record) => {
      //         return <Button onClick={() => handleDelete(record)}>Delete</Button>;
      //     },
      // },
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
                  (col.dataIndex === "price" || col.dataIndex === "quantity" )
                      ? "number"
                          : col.dataIndex === "status"
                              ? "select"
                              : "text",
              dataIndex: col.dataIndex,
              title: col.title,
              editing: isEditing(record),
          }),
      };
  });

  useEffect(() => {
      setData(orders)
  }, [orders]);

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

export default OrdersTable;