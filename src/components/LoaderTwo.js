import React from 'react';
import ruiLogo from '../images/Rui-loader.svg';
import '../css/LoaderTwo.css';


const LoaderTwo = () => {
    return (
        <div>
            <img src={ruiLogo} alt="rui logo" className='pulsate-fwd' />
        </div>
    );
};

export default LoaderTwo;
