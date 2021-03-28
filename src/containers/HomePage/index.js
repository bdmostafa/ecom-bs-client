import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Header from '../Header';
import styled from 'styled-components';
import MegaMenu from './MegaMenu';
import PopularCategories from './PopularCategories';
import DailyDeals from './DailyDeals';
import PopularBrands from './PopularBrands';
import WatchList from './WatchList';
import Footer from '../Footer';
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    const products = useSelector(state => state.products.products);
    console.log(products)
    const [categoriesName, setCategoriesName] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // list all categories name
        let listOfCategories = products.map(product => product.category)
        // sort and remove duplicates
        listOfCategories = listOfCategories.sort().filter((v, i) => listOfCategories.indexOf(v) === i);

        setCategoriesName(listOfCategories);
        
    }, [products])

    console.log("cat======", categories)
    return (
        <HomeWrapper>/ .xc/c/c
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