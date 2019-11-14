import React, {Component} from 'react';
import {Input} from 'reactstrap';
import styled from 'styled-components';

const SearchInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <SearchInput 
                placeholder="Search posts"
                onChange={this.onUpdateSearch}
            />
        )
    }
}


