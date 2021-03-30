import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchTermAction } from '../../Redux/Misc/MiscActions';

const { Search } = Input;

const SearchProduct = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      
      const onSearch = value => setSearchTerm(value);

      useEffect(() => {
          dispatch(searchTermAction(searchTerm));
      }, [searchTerm])

    return (
        <SearchWrapper>
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