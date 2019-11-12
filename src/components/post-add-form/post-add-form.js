import React from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.div`
    margin-top: 20px;
    display: flex;
`;

const BottomInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

const PostAddForm = ({onAdd}) => {
    return (
        <BottomPanel>
            <BottomInput
                type="text"
                placeholder="What do you think about?"
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