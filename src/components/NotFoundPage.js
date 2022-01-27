import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>

            not found page go   <Link style={{color:'red'}}  to='/'> Home </Link>

        </div>
    );
};

export default NotFoundPage;