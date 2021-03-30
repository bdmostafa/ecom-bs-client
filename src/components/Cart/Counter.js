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
            <style jsx>{`
				

				button {
					
				}
			`}</style>
        </>
    );
};

export default Counter;

const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    .value {
        width: 35px;
        border: 1px solid rgb(179 179 179 / 50%);
        border-radius: 5px;
        color: rgba(0, 0, 0, 0.7);
    }
`;

const StyledButton = styled.button`
    font-weight: bold;
    font-size: 20px;
    margin-top: -5px;
`;