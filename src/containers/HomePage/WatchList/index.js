import { Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ctaBanner from '../../../assets/ctaBanner.png';
import { ArrowRightOutlined } from '@ant-design/icons';

const WatchList = () => {
    return (
        <WatchListWrapper>
            <Row gutter={[32, 32]} style={{alignItems: 'center'}}>
                <Col span={6}>
                    <LeftColumn>
                        <Title>
                            Get the Item Before It's Gone!
                        </Title>
                        <CTAText>
                            Receive notifications when the price drops or stocks run low
                        </CTAText>
                        <CTAButton>
                            Discover Watchlist {" "}
                            <ArrowRightOutlined />
                        </CTAButton>
                    </LeftColumn>
                </Col>

                <Col span={18}>
                    <CTAImage src={ctaBanner} />
                </Col>
            </Row>
        </WatchListWrapper>
    );
};

export default WatchList;

const WatchListWrapper = styled.div`
    padding: 50px;

    .ant-image {
        width: 100%;
    }
`;

const LeftColumn = styled.div`
    display: grid;
    align-items: left;
`;

const Title = styled.h2`
    color: #00364F;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
`;

const CTAButton = styled.h4`
    color: black;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #00364F;
    padding: 5px;
    max-width: 170px;
`;

const CTAImage = styled(Image)`
    width: 100%;
`;

const CTAText = styled.p`
    color: #3e3a65;
    text-align: left;
    font-size: 14px;
`;