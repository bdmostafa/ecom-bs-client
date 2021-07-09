import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDate } from "../../Redux/Order/OrderActions";
import OrdersTable from "../../components/OrdersTable";
import styled from "styled-components";

const OrderByDate = () => {
  const dispatch = useDispatch();
  const ordersByDate = useSelector((state) => state.orders.OrdersByDate);
  const [date, setDate] = useState("");

  useEffect(() => {
      if (date === "" || date === undefined || date === null) {
        // console.log('date-null', date)
    } else {
        const dateInfo = {date}
        dispatch(fetchOrdersByDate(dateInfo));
    }
  }, [date]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <Wrapper>
      <DatePicker onChange={onChange} format={"YYYY-MM-DD"} />

      {ordersByDate?.length > 0 && <OrdersTable orders={ordersByDate} />}
    </Wrapper>
  );
};

export default OrderByDate;

const Wrapper = styled.div`
  display: list-item;
  text-align: center;
  margin: 50px;
`;
