import React from 'react';
import {Input} from 'reactstrap';
import styled from 'styled-components';

const SearchInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

const SearchPanel = () => {
    return (
        <SearchInput 
            placeholder="Search posts"
        />
    )
}

export default SearchPanel;