import react from "react";
import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard_friends from "./dasboard/dashboard_friends";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Dashboard_add_friends from "./dasboard/dashboard_add_friends";
import Dashboard_Server from "./dasboard/dashboard_server"

const View = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/dashboard" element={<Dashboard_friends />} />
            <Route exact path="/dashboard/addfriend" element={<Dashboard_add_friends />} />
            <Route exact path="/dashboard/server" element={<Dashboard_Server />} />
        </Routes>
        </BrowserRouter>
    )
}

export default View;
