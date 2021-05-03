import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="d-flex container-fluid justify-content-center">
                <a className="navbar-brand text-center" href="#">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="troll_face"/>
                </a>
                <h1 className="text-center">Memes Generator</h1>
            </div>
        </nav>
    );
}

export default Header;