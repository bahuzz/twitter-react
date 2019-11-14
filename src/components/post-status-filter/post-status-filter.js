import React, {Component} from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterChange} = this.props;
            const active = filter === name;
            const activeBtnClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    key={name}
                    type='button'
                    onClick={() => onFilterChange(name)}
                    className={`btn ${activeBtnClass}`}
                    >{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

