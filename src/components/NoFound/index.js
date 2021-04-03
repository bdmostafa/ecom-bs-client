import { Button } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NoFound = ({ msg, BtnText, goBackLink }) => {
    return (
        <NoFoundWrapper>
			<TextBox>
				<h2>{msg}</h2>
				<Link
					to={goBackLink ? goBackLink : '/'}
				>
					<Button type="primary" >{BtnText ? BtnText : "Go to Home Page"}</Button>
				</Link>
			</TextBox>
		</NoFoundWrapper>
    );
};

export default NoFound;

const NoFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const TextBox = styled.div`
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 50px;
    background: #e7e7e7;
`;