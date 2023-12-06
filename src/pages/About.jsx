import React from 'react';
import './About.css'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

export const About = () => {
    return (
        <div className='about-container'>
            <div className="holder">
                <h3>About Us</h3>
                <div className="about-section">
                    <img src={about1} alt="about1" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore provident accusamus nemo asperiores, beatae quos quam libero animi nesciunt voluptatibus sint aperiam, doloremque, adipisci recusandae magnam aspernatur. Qui aliquam officia dignissimos quae. Sapiente laborum autem consequuntur quaerat quas voluptas possimus expedita iusto architecto blanditiis unde nulla incidunt ut in excepturi quo molestias laboriosam debitis veritatis iste cum nostrum, accusantium vero. Esse, atque quibusdam dolorem eaque delectus fugit dignissimos sit corporis minus incidunt optio cum ipsam necessitatibus iste ullam tempora reprehenderit?</p>
                </div>
                <div className="about-section">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque, quibusdam cum corrupti laborum ullam quasi eligendi molestiae quidem. Voluptas reprehenderit delectus, quam, facere architecto accusantium, sint molestias iusto ducimus quis voluptates perferendis nulla quos. Eveniet quae tempora, libero, modi ex obcaecati voluptatibus a ipsam cum laudantium sit ullam et! Voluptatibus doloremque officia eaque porro. Ab nam quod dolorem animi?</p>
    
                <img src={about2} alt="about2" />
                </div>

            </div>
        </div>
    );
};
