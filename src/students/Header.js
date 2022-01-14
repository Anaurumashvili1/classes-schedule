import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{ props.name }</h1>
            <button>Log Out</button>
        </header>
    )
}

export default Header;