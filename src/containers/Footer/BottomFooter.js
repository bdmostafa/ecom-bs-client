import { Image } from 'antd';
import React from 'react';
import styled from 'styled-components';
import norton from '../../assets/norton.png';

const BottomFooter = () => {
    return (
        <BottomFooterWrapper>
            <CopyrightText>
                Copyright @ 2020 - {new Date().getFullYear()} eBaySolution Inc. All Rights Reserved.
            </CopyrightText>

            <FooterImage src={norton} />
        </BottomFooterWrapper>
    );
};

export default BottomFooter;

const BottomFooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const CopyrightText = styled.p`
    color: black;
    font-size: 11px;
    // float: left;
`;

const FooterImage = styled(Image)`
    // float: right;
    width: 100px;
`;