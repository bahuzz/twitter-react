import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import nextId from "react-id-generator";
import styled from 'styled-components';

// import './app.css';


const AppContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;
const SearchPanelContainer = styled.div`
    margin: 1rem 0;
    display: flex;
    .search-input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "New post about something", important: false, id: 4 },
                {label: "Going to learn React", important: true, id: 3 },
                {label: "That is so good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 1}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 5;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const arr = data.filter(el => el.id !== id);
            return {data: arr};
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const arr = [...data, newItem];
            return {data: arr}
        })
    }
    
    render() {
        return (
            <AppContainer>
                <AppHeader/>
                <SearchPanelContainer>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelContainer>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}
                    />
                <PostAddForm
                    onAdd = {this.addItem} />
            </AppContainer>
        )
    }
    
}

export default App;