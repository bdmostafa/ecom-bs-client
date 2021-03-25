import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import fb from '../../assets/fb.svg';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import CountriesButton from '../../components/CountriesButton';

const dataBuy = [
    {
        title: 'Registration',
        url: '/'
    },
    {
        title: 'eBay Money Back Guarantee',
        url: '/'
    },
    {
        title: 'Bidding & Buying Help',
        url: '/'
    },
    {
        title: 'ebay Local',
        url: '/'
    },
    {
        title: 'eBay Guides',
        url: '/'
    },
    {
        title: 'eBay Contact',
        url: '/'
    },
];

const dataSell = [
    'Registration',
    'eBay Money Back Guarantee',
    'Bidding & Buying Help',
    'ebay Local',
    'eBay Guides',
];

const dataCompanies = [
    'Alibaba',
    'AliExpress',
    'Ebay',
    'Amazon',
    'Shopify',
];

const dataBlogs = [
    {
        title: 'eBay Blogs',
        url: '/blog'
    },
    {
        title: 'Facebook',
        url: '/fb',
        icon: fb
    },
    {
        title: 'Twitter',
        url: '/tw',
    }
];

const dataHelp = [
    {
        title: 'Resolution Center',
        url: '/'
    },
    {
        title: 'Seller Info Center',
        url: '/',
    },
    {
        title: 'Contact Us',
        url: '/contact',
    }
];

const dataCommunity = [
    {
        title: 'Announcements',
        url: '/'
    },
    {
        title: 'FAQ',
        url: '/',
    },
    {
        title: 'Discussion Boards',
        url: '/',
    },
    {
        title: 'Groups',
        url: '/',
    },
    {
        title: 'eBay Top Shared',
        url: '/',
    }
];

const TopFooter = () => {
    return (
        <TopFooterWrapper>
            <Row gutter={[48, 32]}>
                <Col span={6}>
                    <ListGroup
                        size="small"
                        header={<Title>Buy</Title>}
                        dataSource={dataBuy}
                        renderItem={item =>
                            <ListItem>
                                <SingleListItem
                                    title={<Link to={item.url}>{item.title}</Link>}
                                >
                                </SingleListItem>
                            </ListItem>
                        }
                    />
                </Col>
                <Col span={6}>
                    <ListGroup
                        size="small"
                        header={<Title>Sell</Title>}
                        dataSource={dataBuy}
                        renderItem={item =>
                            <ListItem>
                                <SingleListItem
                                    title={<Link to={item.url}>{item.title}</Link>}
                                >
                                </SingleListItem>
                            </ListItem>
                        }
                    />

                    <ListGroup
                        size="small"
                        header={<Title>Tools & Apps</Title>}
                        dataSource={dataSell}
                        renderItem={item => <ListItem>{item}</ListItem>}
                    />
                </Col>
                <Col span={6}>
                    <ListGroup
                        size="small"
                        header={<Title>eBay Companies</Title>}
                        dataSource={dataCompanies}
                        renderItem={item => <ListItem>{item}</ListItem>}
                    />

                    <ListGroup
                        size="small"
                        header={<Title>Stay Connected</Title>}
                        dataSource={dataBlogs}
                        renderItem={item =>
                            <ListItem>
                                <SingleListItem
                                    avatar={<Avatar src={item?.icon} />}
                                    title={<Link to={item.url}>{item.title}</Link>}
                                >
                                </SingleListItem>
                            </ListItem>
                        }
                    />
                </Col>
                <Col span={6}>
                    <ListGroup
                        size="small"
                        header={<Title>Help & Contact</Title>}
                        dataSource={dataHelp}
                        renderItem={item =>
                            <ListItem>
                                <SingleListItem
                                    title={<Link to={item.url}>{item.title}</Link>}
                                >
                                </SingleListItem>
                            </ListItem>
                        }
                    />

                    <ListGroup
                        size="small"
                        header={<Title>Community</Title>}
                        dataSource={dataCommunity}
                        renderItem={item =>
                            <ListItem>
                                <SingleListItem
                                    title={<Link to={item.url}>{item.title}</Link>}
                                >
                                </SingleListItem>
                            </ListItem>
                        }
                    />

                    <Title>eBay Sites</Title>
                    <CountriesButton
                        title="Select Country"
                    />
                </Col>
            </Row>
        </TopFooterWrapper>
    );
};

export default TopFooter;

const TopFooterWrapper = styled.div`
    .ant-list-sm .ant-list-item {
        padding: 0px;
    }

    .ant-list-split .ant-list-item {
        border-bottom: 0px;
    }

    .ant-list-split .ant-list-header {
        border-bottom: 0px;
        padding-bottom: 5px;
    }
`;

const ListGroup = styled(List)`
    margin-bottom: 20px;
`;

const Title = styled.h2`
    color: gray;
    text-align: left;
    font-size: 18px;
`;

const ListItem = styled(List.Item)``;

const SingleListItem = styled(ListItem.Meta)`
    .ant-list-item-meta-title > a {
        color: gray;
    }
`;