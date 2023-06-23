import react from "react";
import loginBg from "../assets/login_bg.svg";
import discord_logo from "../assets/discord_main_logo.svg";
import qr_code from "../assets/qr_code.png";
import offline from '../assets/offline_status_icon.svg';
import {Link} from 'react-router-dom';

import './App.css';

const Login = () => {

    return (
        <div className="section bg-[#5a67f2] w-full overflow-hidden w-screen h-screen relative login-register-bg flex justify-center items-center">
            <Link to="/"><img src={discord_logo} className="absolute sm:left-[50px] sm:top-[30px] top-[60px]" alt="" /></Link>
            <div className="login-box w-screen h-screen sm:w-[650px] sm:h-[390px] bg-[#36393f] rounded-md flex p-4 text-white shadow-2xl">
                <div className="login-section w-full sm:w-[50%] px-2 mt-[11rem] sm:mt-[0]">
                    <div className="login-msg w-full mb-[1.5rem] sm:block">
                        <h3 className="text-2xl font-semibold">Welcome Back!</h3>
                        <p className="text-[#b9bbbe] text-sm">We're so excited to see you again!</p>
                    </div>
                    <div className="login mb-1 sm:mb-[0]">
                        <div className="email mb-[1rem]">
                            <label htmlFor="email" className="text-sm font-semibold text-[#b9bbbe]">EMAIL</label>
                            <input type="text" className="w-full bg-[#2f3136] py-1 mt-1 border border-2 border-[#23272a]" />
                        </div>
                        <div className="password mb-[1rem]">
                            <label htmlFor="password" className="text-sm font-semibold text-[#b9bbbe]">PASSWORD</label>
                            <input type="password" className="w-full bg-[#2f3136] py-1 mt-1 border border-2 border-[#23272a]" />
                        </div>
                        <p className="text-xs text-[#5865f2] font-semibold">Forgot your password?</p>
                    </div>
                    <div className="w-full mx-auto py-[1.5rem]">
                        <button className="w-full bg-[#5865f2] py-2">Login</button>
                        <Link to="/register"><p className="mt-[1rem] text-sm">need an account <span className="text-[#5865f2] font-semibold">Register</span></p></Link>
                    </div>
                </div>
                <div className="qr-code-section sm:w-[50%] hidden sm:flex flex-col justify-center align-center">
                    <div className="qr_code_img p-2 bg-white w-fit mx-auto rounded-md mb-[2rem]">
                        <img src={qr_code} className="qr-code w-[150px] h-auto" />
                    </div>
                    <div className="qr-msg text-center">
                        <h2>Log in with QR Code</h2>
                        <p>Scan this with the <b>Discord mobile app</b> to login instantly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;