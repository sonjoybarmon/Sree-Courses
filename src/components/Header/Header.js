import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="#">SREE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse OurMenu " id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Course</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </nav>


   
    );
};

export default Header;