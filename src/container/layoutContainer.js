import React from 'react'

const Container = ({children}) => {
    return(
        <div className="container" style={{padding: `1em`}}>
            {children}
        </div>
    );
}

export default Container;