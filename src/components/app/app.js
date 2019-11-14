import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import nextId from "react-id-generator";
import styled from 'styled-components';



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
                {label: "New post about something", important: false, like: false, id: 4 },
                {label: "Going to learn React", important: true, like: false, id: 3 },
                {label: "That is so good", important: false,like: false, id: 2},
                {label: "I need a break...", important: false, like: false, id: 1}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
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

    onFilterChange(filter) {
        this.setState({filter})
    }
    

    onToggleElement = (id, element) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            
            const old = data[index];
            const newItem = {...old, [element]: !old[element]};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {data: newArr};
        })
    }

    onToggleImportant = (id) => {
        this.onToggleElement(id, 'important')
    }

    onToggleLiked = (id) => {
        this.onToggleElement(id, 'like')
    } 

    searchPost(items, term) {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => {
            item = item.label.toLowerCase();
            term = term.toLowerCase();
            return item.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }
    
    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppContainer>
                <AppHeader
                    allPosts={allPosts}
                    liked={liked}
                />
                <SearchPanelContainer>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </SearchPanelContainer>
                <PostList 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    />
                <PostAddForm
                    onAdd = {this.addItem} />
            </AppContainer>
        )
    }
    
}

export default App;