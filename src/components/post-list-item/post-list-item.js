import React from 'react';
import './post-list-item.css';



const PostListItem = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let postdate = `${day}-${month}-${year}`;
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                app list item label
            </span>
            <div className="d-flex justify-content-center align-items-center"> 
                <button 
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
                <span className="app-list-item-date">{postdate}</span>
            </div>
        </li>
    )
}

export default PostListItem;