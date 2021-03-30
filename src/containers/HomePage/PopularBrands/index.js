import { Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import apple from '../../../assets/apple.png';
import { ArrowRightOutlined } from '@ant-design/icons';

const PopularBrands = () => {
    return (
        <BrandsWrapper>
            <Heading>
                <Title>Explore Popular Brands</Title>
                <SeeAll>
                    See All {" "}
                    <ArrowRightOutlined />
                </SeeAll>
            </Heading>

            <Row gutter={[32, 32]}>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/jbVr37f/lse-library-Mx1sgh-Czi-Ho-unsplash.jpg" />
                    <CategoriesName> National Union </CategoriesName>
                </BrandColumn>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/XLSZXtz/khadeeja-yasser-3-U9-L9-Chc3is-unsplash.jpg" />
                    <CategoriesName> AKIEA </CategoriesName>
                </BrandColumn>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/2S8T0tz/stanislav-vdovin-LXkwr-YG-Kvg-unsplash.jpg" />
                    <CategoriesName> sure Coffee </CategoriesName>
                </BrandColumn>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/5xn0Nng/lse-library-dd-Nkpl-Rhzv0-unsplash.jpg" />
                    <CategoriesName> Men's League </CategoriesName>
                </BrandColumn>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/C6YXNM4/mnz-3u-D8ao-UBIso-unsplash.jpg" />
                    <CategoriesName> Maison Kitsune </CategoriesName>
                </BrandColumn>
                <BrandColumn xs={24} sm={12} md={8} lg={6} xl={4}>
                    <CircleImage preview={false} src="https://i.ibb.co/4mmVPts/hamza-ali-CCuz-ANFz-Uo-Y-unsplash.jpg" />
                    <CategoriesName> Adidas </CategoriesName>
                </BrandColumn>
            </Row>
        </BrandsWrapper>
    );
};

export default PopularBrands;

const BrandsWrapper = styled.div`
    padding: 50px;
    justify-content: center;
`;

const BrandColumn = styled(Col)`
    align-items: center;
    justify-content: center;
    display: inline-grid;
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

const CircleImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const CategoriesName = styled.p`
    color: black;
    text-align: center;
    font-size: 14px;
`;