import React from 'react';

import Navbar from './Navbar';

export default function Main(props) {
const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
        </div>
        );
}
    


