import React from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.div`
    margin-top: 20px;
    display: flex;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
`;

const PostAddForm = ({onAdd}) => {
    return (
        <BottomPanel>
            <Input
                type="text"
                placeholder="What do you think about?"
                className="new-post-label"
            />
           
            <Button 
                outline 
                color="secondary"
                onClick={() => onAdd('Hello')}
                >Добавить</Button>
        </BottomPanel>
    )
}

export default PostAddForm;