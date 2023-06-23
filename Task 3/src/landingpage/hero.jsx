import react from "react";
import centerBg from '../../assets/center_bg_landing_header.svg';
//import chillingBg from '../../assets/just_chilling_landing.svg';
import leftBg from '../../assets/left_bg_landing_header.svg';
import rightBg from '../../assets/right_bg_landing_header.svg';
import '../App.css';
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className='section bg-[#404eed] w-full z-0 relative overflow-hidden'>
        <div className="hero relative max-w-[1400px] mx-auto">
            <Navbar />
            <img src={centerBg} className="centerbg overflow"/>
            <img src={leftBg} className="leftbg overflow"/>
            <img src={rightBg} className="rightBg overflow" />
            <div className='relative section-container text-white'>
                <div className="hero-action absolute">
                    <h1 className="hero-heading text-slate-100 font-black">IMAGINE A PLACE...</h1>
                    <p className="hero-text">
                    ...where you can belong to a school club, a gaming group, or a worldwide art community.
                     Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </p>
                    <div className="btn-container mx-auto">
                        <button className="btn-hero body-font mr-7 mb-5 hover:text-[#404eed]">Download for Mac <span className="fa-solid fa-download"></span></button>
                        <button className="btn-hero bg-[#292b2f] hover:bg-[#36393f] text-white" onClick={() => navigate("../dashboard", {replace: true})}>Open Discord in your browser</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;