import react from "react";
import { Nav_ribbon, Dashboard_menu_section, Dm, Dashboard_navigate, Active } from "./dashboard_friends"; 


const Dashboard_add_friends = () => {

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
                <Dm_section />
                <Active />
            </div>
        </div>
    )
}

const Dm_section = () => {

    return (
        <div className="dm_section w-[60%] border-r-2 border-[#8e9297a2] relative z-0 top-[8%] text-left bg-[url('../../assets/add_friend_icon.svg')] bg-no-repeat bg-center bg-[length:400px_200px]">
                    <div className="px-8 py-8">
                        <h1 className="text-2xl font-bold text-white">ADD FRIEND</h1>
                        <p className="text-lg text-[#8e9297]">You Can Add Friend With Their Discord Tag, It's cAsE sEnSiTiVe!</p>
                        <Addfriend />
                    </div>
        </div>
    )
}

const Addfriend = () => {

    return (
        <div className="add_friend my-4 flex border border-2 border-[#8e9297a2] w-full rounded-md">
            <input type="text" className="text-xl p-2 bg-[#23272a] text-[#8e9297] w-[70%] rounded-tl-md rounded-bl-md border-none outline-none" placeholder="Enter a Username #0000" />
            <div className="bg-[#2f3136] w-[30%]">
                <button className="bg-[#404eed] px-2 m-[0.4rem] py-1 text-md text-white font-semibold w-fit rounded-md">Send Friend Request</button>
            </div>
        </div>
    )
}

export default Dashboard_add_friends;