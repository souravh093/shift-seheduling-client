import React from 'react';

const Container = ({children}) => {
    
    return (
        <div className='2xl:max-w-[1800px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;