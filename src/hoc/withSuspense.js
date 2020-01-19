import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (Component) => {
    //debugger;
    let withSuspenseComponent = (props) => {
        return <Suspense fallback={<Preloader />}>< Component {...props} /></Suspense>
    }
    return withSuspenseComponent;
}