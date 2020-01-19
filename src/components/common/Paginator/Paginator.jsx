import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {
    let portionSize = props.portionSize;
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    let allPortions = Math.ceil(pageCount / portionSize);
    for (let index = 1; index <= pageCount; index++) {
        pages.push(index);

    }

    let [portionNum, changePortion] = useState(1);

    let setPortion = (currentPort) => {
        changePortion(currentPort);
    }

    let start = (portionNum - 1) * portionSize + 1;
    let stop = portionNum * portionSize;

    return (
        <div>
            {portionNum > 1 ? <button onClick={() => { setPortion(portionNum - 1) }}>Prev</button> : ''}
            {pages.map(page => {
                if (page >= start && page <=stop) {
                    return <span key={page} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.selectedPage : s.dick}>{page}</span>   
                }
            })}
            {portionNum < allPortions ? <button onClick={() => { setPortion(portionNum + 1) }}>Next</button> : ''}
        </div>
    );
}

export default Paginator;