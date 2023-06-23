import react from "react";
import usa from '../../assets/usa_flag.png';
import discordLogo from '../../assets/discord_main_logo.svg'
import {Link} from "react-router-dom";


const Footer = ()  => {
    return (
        <>
            <div className="section bg-[#23272a] pt-[3rem] pb-[1rem]">
                <div className="section-container">
                    <div className="footer-links-container flex space-between flex-wrap items-flex-start w-full w-[90%] max-w-[1260px] mx-auto pb-[2rem]">
                        <div className="footer-msg w-[40%]">
                            <h2 className="footer-heading text-[#5865f2] text-5xl font-2xl">IMAGINE A PLACE</h2>
                            <div className="flex flex-col">
                                <div className="flex place">
                                <img src={usa} alt="img-usa" className="img-usa w-[35px] mr-2" />
                                <p className="text-white">English, USA</p>
                                </div>
                                <div className="socials text-white text-2xl">
                                <i className="fa-brands fa-twitter mr-3"></i>
                                <i className="fa-brands fa-instagram mr-3"></i>
                                <i className="fa-brands fa-square-facebook mr-3"></i>
                                <i className="fa-brands fa-youtube mr-3"></i>
                                </div>
                            </div>
                        </div>
                        <div className="links">
                            <p className="flex flex-col mr-3 footer-column">
                                <a href="#" className="text-[#404eed]">Product</a>
                                <a href="#">Download</a>
                                <a href="#">Nitro</a>
                                <a href="#">Status</a>
                            </p>
                            <p className="flex flex-col mr-3 footer-column">
                                <a href="#" className="text-[#404eed]">Company</a>
                                <a href="#">About</a>
                                <a href="#">Jobs</a>
                                <a href="#">Branding</a>
                                <a href="#">Newsroom</a>
                            </p>
                            <p className="flex flex-col mr-3 footer-column">
                                <a href="#" className="text-[#404eed]">Resources</a>
                                <a href="#">Collage</a>
                                <a href="#">Support</a>
                                <a href="#">Saftey</a>
                                <a href="#">Blog</a>
                                <a href="#">Feedback</a>
                                <a href="#">Developers</a>
                                <a href="#">StreamKit</a>
                            </p>
                            <p className="flex flex-col footer-column">
                                <a href="#" className="text-[#404eed]">Policies</a>
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                                <a href="#">Guidelines</a>
                                <a href="#">Acknowledgements</a>
                                <a href="#">Licenses</a>
                                <a href="#">Moderation</a>
                            </p>
                        </div>
                    </div>
                    <hr className="footer-hr border-[#5865f2]" />
                    <div className="footer-footer w-[90%] max-w-[1260px] mx-auto">
                        <Link to="/"><img src={discordLogo} alt="" className="footer-logo" /></Link>
                        <Link to="/register"><button className="signup bg-[#5865f2] text-white text-lg py-2 px-4 rounded-3xl">Sign up</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;