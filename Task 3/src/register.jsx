import discord_logo from "../assets/discord_main_logo.svg";
import {Link} from 'react-router-dom';
import './App.css';

const Register = () => {

    return (
        <div className="section bg-[#5a67f2] w-full overflow-hidden w-screen h-screen relative login-register-bg flex justify-center items-center">
            <Link to="/"><img src={discord_logo} className="absolute sm:left-[50px] sm:top-[30px] top-[60px]" alt="" /></Link>
            <div className="login-box w-screen h-screen sm:w-[480px] sm:h-auto bg-[#36393f] rounded-md flex p-4 text-white shadow-2xl">
                <div className="login-section w-full px-4 mt-[11rem] sm:mt-[0]">
                    <div className="login mb-1 sm:mb-[0]">
                        <h2 className="text-center text-2xl">Create an account</h2>
                        <div className="email mb-[1rem]">
                            <label for="email" className="text-sm font-semibold text-[#b9bbbe]">EMAIL</label>
                            <input type="email" className="w-full bg-[#2f3136] py-1 mt-1 border border-2 border-[#23272a]" />
                        </div>
                        <div className="username mb-[1rem]">
                            <label for="username" className="text-sm font-semibold text-[#b9bbbe]">USERNAME</label>
                            <input type="text" className="w-full bg-[#2f3136] py-1 mt-1 border border-2 border-[#23272a]" />
                        </div>
                        <div className="password mb-[1rem]">
                            <label for="password" className="text-sm font-semibold text-[#b9bbbe]">PASSWORD</label>
                            <input type="password" className="w-full bg-[#2f3136] py-1 mt-1 border border-2 border-[#23272a]" />
                        </div>
                    </div>
                    <div className="w-full mx-auto py-[1.5rem]">
                        <button className="w-full bg-[#5865f2] py-2">Continue</button>
                        <Link to="/login"><p className="mt-[1rem] text-sm text-[#5865f2]">Already have an account? Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;