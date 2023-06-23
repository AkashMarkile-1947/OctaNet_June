import react from 'react';
import discord_logo from '../../assets/discord_logo.svg';
import new_line from '../../assets/new_line.png';
import compass from '/../assets/compass-regular.svg';
import download from '../../assets/download.svg';
import plus from '../../assets/plus.svg';
import friends from '../../assets/friends.svg';
import stage_discovery from '../../assets/stage_discovery.svg';
import nitro from '../../assets/nitro_icon.svg';
import no_online_friends from '../../assets/no_online_friends.svg';
import {Link} from 'react-router-dom';

const Dashboard_friends = () => {

    return (
        <div className="section dashboard w-screen h-screen text-center overflow-hidden flex">
            <Nav_ribbon />
            <div className="dashboard_menu bg-[#2F3136] w-[400px] pt-4">
                <div className="dashboard_menu-search">
                    <div className='w-[90%] h-[35px] mx-auto bg-[#202225] text-[#8e9297] flex justify-center items-center font-semibold'>Find or start Conversation</div>
                </div>
                <div className="dashboard_menu-section text-[#8e9297] w-[70%] mx-auto font-bold font-2xl">
                    <Dashboard_menu_section />
                </div>
                <Dm />
            </div>
            <div className="d-container relative w-full bg-[#36393F] flex">
                <Dashboard_navigate />
                <Dm_tab />
                <Active />
            </div>
        </div>
    )
}

//dashboard
export const Nav_ribbon = () => {

    return (
        <div className="nav_ribbon w-[100px] h-screen bg-[#23272a] py-3">
                <Link to="/dashboard"><img src={discord_logo} className="ribbon-icon w-[70%] my-1 mx-auto h-auto rounded-2xl hover:shadow-xl"/></Link>
                <img src={new_line} className="ribbon-icon w-[70%] my-3 mx-auto h-auto rounded-2xl hover:shadow-xl" />
                <Link to="/dashboard/server"><img src={plus} className="ribbon-icon w-[70%] my-3 bg-[#36393f]  border border-[#36393f] p-4 font-bold mx-auto h-auto rounded-[50%] hover:shadow-xl" /></Link>
                <img src={compass} className="ribbon-icon w-[70%] my-3 bg-[#36393f]  border border-[#36393f] p-[0.85rem] font-bold mx-auto h-auto rounded-[50%] scale-[1] hover:shadow-xl" />
                <img src={download} className="ribbon-icon w-[70%] my-3 bg-[#36393f]  border border-[#36393f] p-[0.85rem] font-bold mx-auto h-auto rounded-[50%] scale-[1] hover:shadow-xl" />
            </div>
    )
}


export const Dashboard_menu_section = () => {

    return (
        <>
                    <div className="dashboard_menu-item flex justify-between px-4 py-2 mt-4 mb-2 bg-[#393C43]">
                        <img src={friends} className="scale-[1.7] bg-transparent" />
                        <p className="text-white">Friends</p>
                    </div>
                    <div className="dashboard_menu-item flex justify-between px-2 py-2 my-5">
                        <img src={nitro} className="scale-[1.5]" />
                        <p>Nitro</p>
                    </div>
        </>
    )
}

export const Dm = () => {

    return (
        <>
            <div className="direct-m">
                <div className="dm-heading flex justify-between items-center w-[80%] mx-auto text-[#8e9297] font-bold mt-[5rem]">
                    <h2 className='text-lg'>Direct Messages</h2>
                    <p className='text-2xl'>+</p>
                </div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e9297a2]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e9297a2]"></div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e929776]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e929776]"></div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e92975d]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e92975d]"></div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e92975d]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e92975d]"></div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e92972d]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e92972d]"></div>
            </div>
            <div className="dm-list flex justify-between items-center my-6 px-4">
                <div className="dm-circle w-[50px] h-[50px] rounded-[50%] bg-[#8e92971d]"></div>
                <div className="dm-circle w-[200px] h-[30px] rounded-xl bg-[#8e92971d]"></div>
            </div>
        </>
    )
}

export const Dashboard_navigate = () => {

    return (
        <div className="navigate absolute top-[0] py-2 w-full  border-b-2 border-[#202225] z-10">
                <div className="w-[50vw] flex justify-around items-center">
                    <a href="#" className="flex justify-between items-center text-lg w-[100px] p-2">
                    <img src={friends} className="scale-[1.7] bg-transparent" />
                    <p className="text-white">Friends</p>
                    </a>
                    <a href="#" className="text-lg text-[#8e9297]">Online</a>
                    <a href="#" className="text-lg text-[#8e9297]">All</a>
                    <a href="#" className="text-lg text-[#8e9297]">Pending</a>
                    <a href="#" className="text-lg text-[#8e9297]">Blocked</a>
                    <Link to="/dashboard/addfriend"><button className="bg-[#3ba55d] text-white px-2 py-1 rounded-md ">Add Friend</button></Link>
                </div>
        </div>
    )
}

const Dm_tab = () => {

    return (
            <div className="dm_section w-[60%] border-r-2 border-[#8e9297a2] relative z-0 top-[8%]">
                    <img src={no_online_friends} className="w-[50%] mx-auto h-full relative bottom-[8%] z-0" alt="" />
                    <p className='text-[#8e9297a2] text-lg absolute top-[60%] left-[50%] translate-y-[-40%] translate-x-[-50%] z-10'>No one's around to play with Wumpus.</p>
            </div>
        )
}

export const Active = () => {

    return (
        <div className="active-now relative z-0 top-[8%]">
                    <h1 className="text-2xl text-white p-4 font-bold">Active now</h1>
                <div className="active-msg text-center w-full">
                    <h1 className='text-xl text-white'>
                        It's quiet for now...
                    </h1>
                    <p className='text-[#696872] text-lg w-[45ch] p-2'>
                        When a friend starts an activity -- like playing a game or hanging out on voice--we will show it here!
                    </p>
                </div>
        </div>
    )
}

export default Dashboard_friends;