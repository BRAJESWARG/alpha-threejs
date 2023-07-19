import React from 'react';
import MoonImg from './assets/moon-png-44682.png'

const FirstView = () => {
    return (
        <div className='FirstView'>
            <h1 className='FirstView-head'>THE ALPHA AGENCY</h1>
            <img
                // src='https://spaceplace.nasa.gov/review/all-about-the-moon/the-moon-near-side.en.jpg'
                // src='https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png'
                src={MoonImg}
                alt='FirstView-img'
                className='FirstView-img'
            />
        </div>
    )
}

export default FirstView;