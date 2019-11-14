import React,{Component} from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.form`
    margin-top: 20px;
    display: flex;
`;

const BottomInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const {text} = this.state;
        if(text) {
            this.props.onAdd(text)
            this.setState({
                text: ''
            })
        } 
    }

    render() {
        return (
            <BottomPanel
                onSubmit={this.onSubmit}
            >
                <BottomInput
                    type="text"
                    placeholder="What do you think about?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
               
                <Button 
                    outline 
                    color="secondary"
                    >Добавить</Button>
            </BottomPanel>
        )
    }
    
}
