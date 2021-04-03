import React from 'react';
import styled from 'styled-components';

const Counter = ({
    count,
    handleIncreaseQty,
    handleDecreaseQty
}) => {

    return (
        <>
            <CountWrapper>
                <StyledButton onClick={handleIncreaseQty}>
                    +
				</StyledButton>
                <input
                    value={count}
                    className="value"
                />
                <StyledButton onClick={handleDecreaseQty}>
                    -
				</StyledButton>
            </CountWrapper>
        </>
    );
};

export default Counter;

const CountWrapper = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    .value {
        pointer-events: none;
        height: 26px;
        text-align: center;
        width: 35px;
        border: 1px solid rgb(179 179 179 / 100%);
        border-radius: 5px;
        color: rgba(0, 0, 0, 0.7);
        margin: 5px;
    }
`;

const StyledButton = styled.button`
    font-weight: bold;
    width: 25px;
`;