import react from "react";
import tinystars from '../../assets/tiny_stars_landing.svg'
import '../App.css';

const DownloadSection = () => {
    return (
        <div className="section invite-only bg-[#f6f6f6]">
            <div className="section-container">
                <div className="section-action w-[90%] pt-[4rem] max-w-[1260px] w-full flex flex-col justify-center items-center mx-auto">
                        <div className="d-heading w-fit mx-auto relative h-[80px] mb[2rem]">
                            <img src={tinystars} className="w-full"/>
                            <h2 className="text-[32px] leading-[38.6px] font-extrabold text-center download-heading relative px-[4rem] py-[4rem]">Ready to start your journey?</h2>
                        </div>
                        <button className="bg-[#5865f2] px-4 py-3 text-lg rounded-3xl text-white my-10 mb-20 hover:shadow-2xl"><span className="fa-solid fa-download mr-2"></span>Download for Mac</button>
                </div>
            </div>
        </div>
    )
}


export default DownloadSection;


