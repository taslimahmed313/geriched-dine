import React from 'react';
import { FaChair, FaFire, FaParking, FaSwimmingPool, FaWater, FaWifi } from "react-icons/fa";
import { About_bg } from '../MenuData/MenuData';
import TextOverlay from '../TextOverlay/TextOverlay';
import "./About.css";

const About = () => {
    return (
        <div>
            <TextOverlay page_title={"About Us"} source={About_bg}/>
            <div  className='app__bg section__padding'>
            <div style={{ marginTop: 50}} className='about_grid'>
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
            <div className='mobile_device_img'>
                <img className='mobile_first_img hover_effect' src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/About-Msc-4-pnvmh0h76u15vbzvj49dxpkgjc54o39urd4au57t3k.jpg" alt="" />
                <img className='mobile_second_img hover_effect' src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/About-msc-1-1-pnvmh1f1do2g6xyidmo0i7bx4q0hvsdl3hrsbf6exc.jpg" alt="" />
                <img className='mobile_first_img hover_effect' src="https://bistro-e.com/wp-content/uploads/elementor/thumbs/WWA-1-1-pnvmfnllbg693lyvgj4sc1whnau1jtvt8n71vr8a34.jpg" alt="" />
            </div>
            </div>

            
            {/* Restaurant Services Area Here */}
            <div className='restaurant_services'>
                <h1 className='headtext__services'>Restaurant Services</h1>
                <div className='icons_grid'>
                    <span className='icon_vertical_align'><FaWifi/> <span>Free WiFi</span></span>
                    <span className='icon_vertical_align'><FaFire/> <span>Smoking</span></span>
                    <span className='icon_vertical_align'><FaWater/> <span>Lakeside</span></span>
                    <span className='icon_vertical_align'><FaSwimmingPool/> <span>Swimming</span> 
                     </span>
                    <span className='icon_vertical_align'><FaParking/> <span>Parking</span></span>
                    <span className='icon_vertical_align'><FaChair/> <span>Event</span></span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;