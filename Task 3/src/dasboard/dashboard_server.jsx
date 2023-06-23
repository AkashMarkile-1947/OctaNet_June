import react from "react";
import { Nav_ribbon } from "./dashboard_friends";
import discord_logo from '../../assets/discord_l.svg';
import notifications_icon from '../../assets/notifications.svg';
import mic_off from '../../assets/mic_off.svg';
import settings from '../../assets/settings.svg';
import headphone from '../../assets/headphone.svg';
import pin from '../../assets/pin.svg';
import plus_circle from '../../assets/plus-icon.svg';
import gift from '../../assets/gift_box_icon.svg';
import gif from '../../assets/gif_icon.svg';
import emoji from '../../assets/emoji_icon.svg';
import all_users from '../../assets/group.svg';
import search from '../../assets/search.svg';
import question_mark from '../../assets/question_mark_icon.svg';
import inbox_icon from '../../assets/inbox_icon.svg'
import discord_greeen from '../../assets/discord_g.svg'
import discord_yellow from '../../assets/discord_y.svg'




//          <div className="dashboard_menu-section text-[#8e9297] w-[70%] mx-auto font-bold font-2xl text-left"></div>

const Dasboard_Server = () => {

    return (
      <div className="section dashboard w-screen h-screen overflow-hidden flex">
        <Nav_ribbon />
        <Discord_Menu />
        <div className="d-container relative w-full bg-[#36393F] flex">
            <div className="w-[70%] max-w-[70%] relative">
                <Content />
            </div>
            <div className="w-[30%] bg-[#2f3136]">
                <Active_Section />
            </div>
        </div>
      </div>
    ); 
}

export default Dasboard_Server;

const Discord_Menu = () => {

    return (
        <div className="dashboard_menu bg-[#2F3136] w-[400px] pt-4">
          <div className="flex justify-between text-xl items-center px-4">
            <p className="text-white font-bold">newLine</p>
            <p className="text-3xl text-[#4f545c] mb-6">&#215;</p>
          </div>
          <Channels />
          <Profile />
        </div>
    )
}
const Profile = () => {
    return (
        <div className="profile absolute bottom-0 bg-[#292b2f] flex">
            <div className="flex items-center px-4 py-2">
                <div className="w-[65px] h-[65px] relative">
                    <img src={discord_logo}/>
                </div>
                <div className="name-id">
                    <h3 className="name text-xl font-bold text-white">&nbsp;&nbsp;&nbsp;&nbsp; Milad</h3>
                    <p className="text-[#4f545c] font-bold">&nbsp;&nbsp;&nbsp;&nbsp; #8565</p>
                </div>
            </div>
            <div className="tools flex items-center justify-around p-4">
                <img src={mic_off} className="w-[25px] h-auto mr-2" />
                <img src={settings} className="w-[25px] h-auto mr-2" />
                <img src={headphone} className="w-[25px] h-auto" />
            </div>
        </div>
    )
}
const Channels = () => {

    return (
        <div className="text-[#8e9297] text-xl font-bold px-4 relative z-0">
            <p className="mb-6"># rules</p>
            <p className="flex">
              <div className="rotate-180 mr-2 mb-3">^</div>TEXT CHANNELS
            </p>
            <p className="mb-5 p-1 w-full bg-[#4f545c] text-white"># algorithms</p>
            <p className="mb-6 text-white"># announcements</p>
            <p className="mb-6 text-white"># blogging</p>
            <p className="mb-6"># collaborations</p>
            <p className="mb-6"># course-ideas</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
            <p className="mb-6 text-white"># machine-learning</p>
        </div>
    )
}

const Content = () => {

    return (
        <>
            <Content_nav />
            <div className="">
            </div>
            <Content_msg />
        </>
    )
}

const Content_nav = () => {

    return (
        <>
            <div className="content-nav w-full py-1 px-4 sticky top-0 flex items-center justify-between">
                <p className="text-2xl text-white font-semibold"><span className="text-3xl text-[#b9bbbe]">#</span> JavaScript</p>
                <div className="flex items-center">
                    <img className="scale-[0.6] rotate-[40deg]" src={pin} />
                    <img className="scale-[0.6]" src={notifications_icon} />
                    <img className="scale-[0.6]" src={all_users}/>
                </div>
            </div>
        </>
    )
}

const Content_msg = () => {

    return (
        <>
            <div className="flex bg-[#41444B] py-1 px-4 absolute bottom-[2%] shadow-lg w-[95%] left-[2.5%] items-center rounded-lg">
                <div className="w-[80%] flex items-center">
                    <img src={plus_circle} className="scale-[0.7]"/>
                    <input type="text" className="text-lg py-1 w-full bg-[#41444B] text-[#6E7076]" placeholder="Message #undefiend" />
                </div>
                <div className="w-[20%] flex justify-around items-center">
                    <img src={emoji} className="w-[30px] h-auto scale-[0.8]"/>
                    <img src={gif}  className="scale-[0.7]" />
                    <img src={gift}  className="scale-[0.7]" />
                </div>
            </div>
        </>
    )
}

const Active_Section = () => {

    return (
        <>
            <Active_Nav />
        </>
    )
}

const Active_Nav = () => {

    return (
        <>
            <div className="flex justify-space-around items-center bg-[#36393F]">
            <div className="flex p-1">
                <input type="text" className="text-[#b9bbbe] border-none outline-none bg-[#202225] text-md" placeholder="Search"/>
            </div>
            <img src={question_mark} className="scale-[0.6]" />
            <img src={inbox_icon} className="scale-[0.6]" />
            </div>
            <Online_users />
        </>
    )
}

const Online_users = () => {

    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-[#b9bbbe] text-md py-2 my-2 font-semibold">ONLINE--3</h1>
            <div className="flex items-center text-[#b9bbbe]">
                <img src={discord_logo} className="w-[50px] h-auto rounded-xl my-1" />
                <p className="text-lg ml-2">Milad <span className="relative bottom-[2px]">	&#128081;</span></p>
            </div>
            <div className="flex items-center text-[#b9bbbe] my-1">
                <img src={discord_greeen} className="w-[50px] h-auto rounded-xl" />
                <p className="text-lg ml-2">Batman</p>
            </div>
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
            <XjokerX />
        </div>
    )
}

const XjokerX = () => {

    return (
        <div className="flex items-center text-[#b9bbbe] my-2">
                <img src={discord_yellow} className="w-[50px] h-auto rounded-xl" />
                <p className="text-lg ml-2">[x]joker[x]</p>
        </div>
    )
}