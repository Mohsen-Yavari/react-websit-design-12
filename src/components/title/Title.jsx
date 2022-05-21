import React from 'react';

const Title = ({subtitle,title}) => {
    return (
        <div id="heading" style={{marginTop:"400px"}}>
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
        </div>
    );
};

export default Title;