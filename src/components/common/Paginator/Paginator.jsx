import React from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let index = 1; index <= pageCount; index++) {
        pages.push(index);

    }
    return (
            <div>
                {pages.map(page => {
                    return <span key = {page} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.selectedPage : 'dick'}>{page}</span>
                })}
            </div>
    );
}

export default Paginator;