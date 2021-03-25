import React from 'react';
import { Input } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Search } = Input;

const SearchProduct = props => {
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      
      const onSearch = value => console.log(value);
    return (
        <SearchWrapper>
            <SearchOutlined className="search-icon" />
            <Search
                placeholder={props.placeholder}
                enterButton={props.enterButton}
                size={props.size}
                suffix={suffix}
                onSearch={onSearch}
            />
        </SearchWrapper>
    );
};

export default SearchProduct;

const SearchWrapper = styled.div`
    margin-top: 10px;
    
    .search-icon {
        position: absolute;
        top: 23px;
        z-index: 99999;
        left: 5px;
    }
`;