import React from 'react';

const Masthead = () => (
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <div className={"mb-5"} style={{borderRadius: '2.5rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <img className="masthead-avatar" style={{border:'0.25rem solid white', borderRadius:'2.5rem', width: '24rem'}} src="/Me.png" alt="..."/>
            </div>
            <h1 className="masthead-heading text-uppercase mb-0">Sathiyaraman M</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">Full Stack .NET Developer</p>
        </div>
    </header>
);

export default Masthead;