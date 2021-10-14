import React from 'react';
import './assets/Hero.css';

const hero = () => {
    return(
        <section className="hero" id="hero">
            <div className="hero__img">
                <img src="./assets/images/image-mockups.png" alt="Mockup of cellphones" />
            </div>
            <div className="hero__text">
                <h2 className="hero__title">Next generation digital banking</h2>
                <p className="hero__paragraph paragraph">  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <a className="hero__btn btn" href="#">  Request Invite</a>
            </div>
        </section>
    )
}

export default hero;