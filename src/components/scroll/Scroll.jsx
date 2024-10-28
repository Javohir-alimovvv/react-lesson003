import React from 'react'
import "./Scroll.scss"
import imagesone from "../../assets/images/img1.png"
import imagestwo from "../../assets/images/img2.png"
import imagesthe from "../../assets/images/img3.png"


const Scroll = () => {
    return (
        <>

            <div className='scroll_box'>
                <h2 className='scroll_box_text'>Find just what you are looking for</h2>
                <div className='scroll'>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesone} alt="" />
                        <h3 className='scroll_text'>Holiday Gift Guide</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagestwo} alt="" />
                        <h3 className='scroll_text'>New Samsung releases</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesthe} alt="" />
                        <h3 className='scroll_text'>The latest Galaxy smartphone</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesone} alt="" />
                        <h3 className='scroll_text'>Holiday Gift Guide</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagestwo} alt="" />
                        <h3 className='scroll_text'>New Samsung releases</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesthe} alt="" />
                        <h3 className='scroll_text'>The latest Galaxy smartphone</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesone} alt="" />
                        <h3 className='scroll_text'>Holiday Gift Guide</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagestwo} alt="" />
                        <h3 className='scroll_text'>New Samsung releases</h3>
                    </div>
                    <div className='scroll_cards'>
                        <img className='scroll_img' src={imagesthe} alt="" />
                        <h3 className='scroll_text'>The latest Galaxy smartphone</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Scroll