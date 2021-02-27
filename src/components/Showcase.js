import { Button } from './Button'
import React from 'react'
import '../App.css'
import './Showcase.css' 


export default function Showcase() {
    return (
        <div className="showcase-container">
            <h1>DUMMY WEBSITE</h1>
            <p>What are you waiting for?</p>
            <div className="showcase-btns">
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