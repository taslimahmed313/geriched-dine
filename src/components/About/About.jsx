import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className='app__bg section__padding'>
            <div className='about_grid'>
                <div className='about_text'>
                <h3>High-end bistro serving classic fare with a Mediterranean accent. Doubles as chic, all-day coffee shop adjacent to Edge – Dhaka’s premier art gallery.</h3>
                <p>Nobody really knows for sure where the word “bistro” comes from. Rumor has it that during the Russian occupation of Paris in the early nineteenth century, Cossacks clamored for their food by shouting “bistro” – meaning “quickly”. Today the bistro culture, with its myriad variants, has spread to all corners of the world. While the word “bistro” may be ubiquitous, your Bistro E is a very special place indeed.</p>
            </div>
            <div className='about_image_grid'>
                <div className='vertical_image hover_effect'>
                  <img src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/About-Msc-4-pnvmh0h76u15vbzvj49dxpkgjc54o39urd4au57t3k.jpg" alt="" />
                </div>
                <div className='horizontal_image'>
                    <img className='hover_effect' src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/WWA-1-1-pnvmfnllbg3esn9fs5qhoiqfq2l16dzw97pvqylevc.jpg" alt="" />
                    <img className='hover_effect' src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/About-msc-2-1-pnvmh2cvki0w7l7pjrocf5xbsvmuq1leg6y3nwi5jc.jpg" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;