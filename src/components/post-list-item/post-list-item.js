import React, {Component} from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {

    render() {
        const {label,onDelete,onToggleLiked,onToggleImportant,like,important} = this.props;
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let postdate = `${day}-${month}-${year}`;
        let classNames = "app-list-item d-flex justify-content-between";
        if(important) {
            classNames += ' important';
        }
        if(like) {
            classNames += ' like';
        }  

        return (
            <li className="list-group-item ">
                <div className={classNames}>
                    <span
                        onClick={onToggleLiked} 
                        className="app-list-item-label">
                        {label}
                    </span>
                    <div className="d-flex justify-content-center align-items-center"> 
                        <button 
                            type="button"
                            onClick={onToggleImportant}
                            className="btn-star btn-sm">
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                            type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                        <span className="app-list-item-date">{postdate}</span>
                    </div>
                </div>
            </li>
        )
    }
}
