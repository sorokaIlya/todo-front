import React from "react";

import {Link} from "react-router-dom";
import {useStores} from "./App";
const Nav=()=>{

    const {UserEntity}  = useStores()
    return(
            <nav className="header">
                <ul className="header-nav">
                    <div>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign in</Link>
                    </li>
                    </div>
                {/*    if localstorage get token - render Logout*/}
                    {localStorage.getItem('token') && <li>
                        <button onClick={()=>UserEntity.clear()} type="button" className="sign-out">Sign out</button>
                    </li>}
                </ul>
            </nav>

    )
}
export default Nav;
