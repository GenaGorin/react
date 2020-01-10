import React from 'react';
import s from './Music.module.css';
import {componentOpenWithSound} from '../../hoc/withAuthRtedirect';

const Music = () => {
    return (
        <h1>Hello world it's music</h1>
    )
}

export default componentOpenWithSound(Music);