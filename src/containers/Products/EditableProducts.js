import React, { useEffect, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from '../../Redux/Product/ProductActions';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
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

const EditableProducts = () => {
    const products = useSelector(state => state.products.products);

    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
  
    useEffect(() => {
        setData(products)
    }, [products]);

    const isEditing = (record) => record._id === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        title: '',
        price: '',
        description: '',
        category: '',
        ...record,
      });
      setEditingKey(record._id);
    };
  
    const cancel = () => {
      setEditingKey('');
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };
  
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item._id);
  
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          console.log(item._id, row)
          dispatch(updateProduct(item._id, row))
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
  
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        width: '25%',
        editable: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        width: '25%',
        editable: true,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        width: '40%',
        editable: true,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        width: '15%',
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <a
                href="javascript:;"
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
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
          );
        },
      },
      {
        title: "Action",
        dataIndex: "delete",
        render: (_, record) => {
            return <Button onClick={() => handleDelete(record._id)}>Delete</Button>;
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
          inputType: col.dataIndex === 'price' ? 'number' : 'text',
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
          }}
        />
      </Form>
    );
  };

export default EditableProducts;