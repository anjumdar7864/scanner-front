import React from 'react';
import Headerhome from './Headerhome';
import Footerhome from './Footerhome';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Headerhome />
            {children}
        <Footerhome />
    </React.Fragment>
    );
};
export default Layout;