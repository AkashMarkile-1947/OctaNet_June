import react from "react";
import chillingBg from '../../assets/just_chiling_landing.svg';
import '../App.css';

const Chilling = () => {
    return (
        <div className="section invite-only bg-[#f6f6f6]">
            <div className="section-container">
                <div className="section-action text-[#23272a] w-[90%] pt-[4rem] max-w-[1260px] mx-auto">
                    <div className="section-info w-[90%] mx-auto md:min-w-[344px] chillin-section text-center">
                        <h2 className="section-heading md:mb-[2rem] font-sans md:text-[48px] md:leading-[57.6px]">RELIABLE TECH FOR STAYING CLOSE</h2>
                        <p className="section-text md:text-[18px] md:leading-[30.6px] xl:text-[20px] xl:leading-[32.5px]">
                        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                        </p>
                    </div>
                    <img src={chillingBg} className="invite-img  w-[100%] mx-auto md:min-w-[344px]" />
                </div>
            </div>
        </div>
    )
}


export default Chilling;