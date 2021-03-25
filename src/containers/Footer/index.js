import React from 'react';
import BottomFooter from './BottomFooter';
import TopFooter from './TopFooter';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterWrapper>
            <TopFooter />
            <BottomFooter />
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    border-top: 1px solid black;
    padding: 50px;
`;