import { Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import shoe from '../../../assets/shoe.png';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const PopularCategories = () => {
    const products = useSelector(state => state.products.products);
    const [categoriesName, setCategoriesName] = useState([]);

    useEffect(() => {
        // list all categories name
        let listOfCategories = products.map(product => product.category)
        // sort and remove duplicates
        listOfCategories = listOfCategories.sort().filter((v, i) => listOfCategories.indexOf(v) === i);

        setCategoriesName(listOfCategories);

    }, [products])

    // Get one image from category list randomly
    const randomImage = (imgArray) => {
        const random = Math.floor(Math.random() * imgArray.length)
        return imgArray[random].image;
    };

    return (
        <CategoriesWrapper>
            <Title>Explore Popular Categories</Title>
            <Row gutter={[32, 32]}>

                {categoriesName.map(cat => (
                    <Col span={4} key={cat} name={cat} className="cat-name">
                        <Link to={{ pathname: `/products/category/${cat}`, param: cat}}>
                                <CircleImage src={randomImage(products.filter(product => product.category === cat))} />
                                <CategoriesName> {cat} </CategoriesName>
                        </Link>
                    </Col>
                ))}

            </Row>
        </CategoriesWrapper>
    );
};

export default PopularCategories;

const CategoriesWrapper = styled.div`
    padding: 50px;

    .cat-name {
        align-items: center;
    justify-content: center;
    display: inline-grid;
    }
`;

const Title = styled.h2`
    color: black;
    text-align: left;
    font-size: 18px;
`;

const CircleImage = styled(Image)`
    width: 175px;
`;

const CategoriesName = styled.p`
    color: black;
    text-align: center;
    font-size: 14px;
`;