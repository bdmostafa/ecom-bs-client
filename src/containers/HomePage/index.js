import React from 'react';
import Banner from './Banner';
import Header from '../Header';
import styled from 'styled-components';
import MegaMenu from './MegaMenu';
import PopularCategories from './PopularCategories';
import DailyDeals from './DailyDeals';
import PopularBrands from './PopularBrands';
import WatchList from './WatchList';
import Footer from '../Footer';

const HomePage = () => {
    return (
        <HomeWrapper>
            <Header />
            <MegaMenu />
            <Banner />
            <PopularCategories />
            <DailyDeals />
            <PopularBrands />
            <WatchList />
            <Footer />
        </HomeWrapper>
    );
};

export default HomePage;

const HomeWrapper = styled.div`
    margin: 0px 100px;
`;