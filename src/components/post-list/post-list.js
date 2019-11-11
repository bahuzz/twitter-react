import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {
    let list = posts.filter(post => typeof(post) === "object"&&post!==null).map(item => {
        const {id, ...itemProps} = item;
        return(
            <PostListItem {...itemProps}  
            key={id} 
            onDelete={()=> onDelete(id)}
            />
        )
    });
    return (
        <ul className="app-list list-group">
            {list}
        </ul>
    )
}

export default PostList;