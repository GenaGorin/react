import React from 'react';
import s from './News.module.css';
import {componentOpenWithSound} from '../../hoc/withAuthRtedirect';

const News = () => {
    return (
        <h1 className = {s.title}>Hello world it's news</h1>
    )
}

export default componentOpenWithSound(News);