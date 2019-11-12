import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {ListGroup} from 'reactstrap';
import styled from 'styled-components';

const AppList = styled(ListGroup)`
    margin-top: 50px;
    .list-group-item {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`;

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {
    let list = posts.filter(post => typeof(post) === "object"&&post!==null).map(item => {
        const {id, ...itemProps} = item;
        return(
            <PostListItem {...itemProps}  
                key={id} 
                onDelete={()=> onDelete(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleLiked={()=>onToggleLiked(id)}
            />
        )
    });
    return (
        <AppList>
            {list}
        </AppList>
    )
}

export default PostList;