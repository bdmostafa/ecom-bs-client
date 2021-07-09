import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../Redux/Order/OrderActions";
import OrdersTable from "../../components/OrdersTable";
import { Input } from "antd";
import styled from "styled-components";

const SingleOrder = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.order);
  const [id, setId] = useState("");
  const [orderArr, setOrderArr] = useState([]);

  const { Search } = Input;

  useEffect(() => {
    if (id != "") {
      dispatch(fetchOrder(id));
      setOrderArr([order]);
    }
  }, [id]);

  const onSearch = (value) => {
    // console.log(value);
    setId(value);
  };

  return (
    <Wrapper>
      <div
        style={{ width: "30%", display: "inline-block", marginBottom: "20px" }}
      >
        <Search
          placeholder="Enter Order Id"
          onSearch={onSearch}
          enterButton
          size="middle"
          allowClear
        />
      </div>

      {orderArr.length > 0 && <OrdersTable orders={orderArr} />}
    </Wrapper>
  );
};

export default SingleOrder;

const Wrapper = styled.div`
  display: list-item;
  text-align: center;
  margin: 30px;
`;
