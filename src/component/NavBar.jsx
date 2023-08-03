import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const activeStyle ={
        color:'red'
    }
    return (
        <nav className='nav'>
            <ul className='listWrap'>
                <li ><NavLink  Link to="/"    style={({isActive})=>(isActive ? activeStyle : undefined)}>HOME </NavLink></li>
                <li ><NavLink  Link to="/All" style={({isActive})=>(isActive ? activeStyle : undefined)}> All </NavLink></li>
                <li ><NavLink  Link to="/Acc" style={({isActive})=>(isActive ? activeStyle : undefined)}> ACC </NavLink></li>
                <li ><NavLink  Link to="/Tool" style={({isActive})=>(isActive ? activeStyle : undefined)}> Tool </NavLink></li>
                <li ><NavLink  Link to="/Small" style={({isActive})=>(isActive ? activeStyle : undefined)}> SmallGoods </NavLink></li>
                <li ><NavLink  Link to="/Interior" style={({isActive})=>(isActive ? activeStyle : undefined)}> interior props </NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;