import styled from 'styled-components';
import { Layout } from 'antd';
import TopHeader from './TopHeader';
import HeaderSearch from './HeaderSearch';

// const { Header } = Layout;

const HeaderMain = () => {
    return (
        <HeaderWrapper>
           <TopHeader />
           <HeaderSearch />
        </HeaderWrapper>
    )
};

export default HeaderMain;

const HeaderWrapper = styled.div`
    background: white;
    color: black;
`;