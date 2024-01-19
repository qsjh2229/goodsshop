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
                {/* <li ><NavLink  Link to="/About" style={({isActive})=>(isActive ? activeStyle : undefined)}> About </NavLink></li> */}
                <li ><NavLink  Link to="/Lighting" style={({isActive})=>(isActive ? activeStyle : undefined)}> Lighting </NavLink></li>
                <li ><NavLink  Link to="/kitchen" style={({isActive})=>(isActive ? activeStyle : undefined)}> Kitchen </NavLink></li>
                <li ><NavLink  Link to="/HomeAcc" style={({isActive})=>(isActive ? activeStyle : undefined)}> HomeAcc </NavLink></li>
                <li ><NavLink  Link to="/Funiture" style={({isActive})=>(isActive ? activeStyle : undefined)}> Funiture </NavLink></li>

            </ul>
        </nav>
    );
};

export default NavBar;