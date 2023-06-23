import react from "react";
import hangingoutBg from '../../assets/hanging_out_easy_landing.svg';
import '../App.css';

const Hangingout = () => {
    return (
        <div className="section invite-only bg-[#f6f6f6]">
            <div className="section-container">
                <div className="section-action text-[#23272a] w-[90%] py-[4rem] md:py-[6rem] max-w-[1260px] mx-auto md:flex md:space-between md:items-center md:flex-row-reverse">
                    <img src={hangingoutBg} className="invite-img img-s w-[100%] mx-auto md:w-[54%] md:min-w-[344px]" />
                    <div className="section-info w-[90%] mx-auto md:w-[45%] md:min-w-[344px] md-max-w-[380px]">
                        <h2 className="section-heading md:mb-[2rem] font-sans md:text-[48px] md:leading-[57.6px]">Where hanging out is easy</h2>
                        <p className="section-text md:text-[18px] md:leading-[30.6px] xl:text-[20px] xl:leading-[32.5px]">
                            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hangingout;