import React from 'react';
import { Carousel, Image } from 'antd';
import banner1 from '../../../assets/banner1.png';
import styled from 'styled-components';

const contentStyle = {
    height: '220px',
    // width: '100%'
};

const Banner = () => {
    return (
        <BannerWrapper className="banner">
            <div>
                <Image style={contentStyle} src={banner1}/>
            </div>
            <div>
                <Image style={contentStyle} src={banner1}/>
            </div>
            <div>
                <Image style={contentStyle} src={banner1}/>
            </div>
        </BannerWrapper>
    );
};

export default Banner;

const BannerWrapper = styled(Carousel)`
    .ant-image {
        width: 100%;
    }
`;