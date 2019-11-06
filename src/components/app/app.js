import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

const App = () => {
    const data = [
        23,
        {label: "New post about something", important: false, id: 4 },
        16,
        {label: "Going to learn React", important: true, id: 3 },
        {label: "That is so good", important: false, id: 2},
        {label: "I need a break...", important: false, id: 1}
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="d-flex search-panel">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;