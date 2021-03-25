import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';
import product from '../../../assets/product.png';

const { Meta } = Card;

const DailyDeals = () => {
    return (
        <DailyDealsWrapper>
            <Heading>
                <Title>Daily Deals</Title>
                <SeeAll>
                    See All {" "}
                    <ArrowRightOutlined />
                </SeeAll>
            </Heading>

            <Row gutter={[32, 32]}>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<OffPrice> <del>$1450.95</del> <span>43% Off</span></OffPrice>} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<span>$1450.95</span>} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<span>$1450.95</span>} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<span>$1450.95</span>} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<span>$1450.95</span>} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product} />}
                    >
                    <Meta title="$999.95" description={<span>$1450.95</span>} />
                    </Card>
                </Col>
            </Row>
            

        </DailyDealsWrapper>
    );
};

export default DailyDeals;

const DailyDealsWrapper = styled.div`
    padding: 50px;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    color: black;
    text-align: left;
    font-size: 18px;
`;

const SeeAll = styled.h4`
    color: black;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin-left: 20px;
`;

const OffPrice = styled.span`
    color: gray;
`;