import { Button } from './Button'
import React from 'react'
import '../App.css'
import './HeroSection.css' 


export default function HeroSection() {
    return (
        <div className="hero-container">
            <h1>DUMMY WEBSITE</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn-large">
                    DUMMY WEBSITE
                </Button>
                <Button 
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn-large">
                    DUMMY TRAILER<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}