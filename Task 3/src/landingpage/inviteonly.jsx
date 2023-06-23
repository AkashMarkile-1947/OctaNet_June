import react from "react";
import inviteOnly from '../../assets/invite_only_landing.svg';
import '../App.css';

const InviteOnly = () => {
    return (
        <div className="section invite-only">
            <div className="section-container">
                <div className="section-action text-[#23272a] w-[90%] py-[4rem] md:py-[6rem] max-w-[1260px] mx-auto md:flex md:space-between md:items-center">
                    <img src={inviteOnly} className="invite-img img-s w-[100%] mx-auto md:w-[54%] md:min-w-[344px]" />
                    <div className="section-info w-[90%] mx-auto md:w-[45%] md:min-w-[344px] md-max-w-[380px]">
                        <h2 className="section-heading md:mb-[2rem] font-sans md:text-[48px] md:leading-[57.6px]">Create an &nbsp; invite-only &nbsp; place where you belong</h2>
                        <p className="section-text md:text-[18px] md:leading-[30.6px] xl:text-[20px] xl:leading-[32.5px]">
                        Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InviteOnly;