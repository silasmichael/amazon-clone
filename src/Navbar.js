import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import{useStateValue} from "./StateProvider";
import { auth } from './firebase';
function Navbar() {
    const [{basket,user}] = useStateValue();
    const login= ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="navbar">
            <div className="navbar-category">
                {/* <Link to="/">
                </Link> */}

            </div>
            <div className="navbar-logo">
                <MenuOutlinedIcon className="navbar-category-icon"/>
                <Link>
                   <img className='navbar-logo-img'
                   src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
                   alt= ""
                   />
                </Link>
            </div>
            <div className="navbar-search">
                <input className='navbar-search-input'/>
                <SearchIcon className="navbar-search-icon"/>

            </div>
            <div className="navbar-options">
                <Link to={!user &&"/login"} className="navbar-link">
                    <div onClick={login} className="navbar-options-signin">
                        <span id="hello">Hello!! {user.email}</span>
                        <span id="accounts">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/" className="navbar-link">
                    <div className="navbar-options-returns">
                        <span id="return">Returns</span>
                        <span id="orders">& Orders</span>
                    </div>
                </Link>
                <Link to="/checkout" className="navbar-link">
                    <div className="navbar-options-cart">
                        <span id='cart-count'>{basket?.length}</span>
                        <ShoppingCartOutlinedIcon className="navbar-options-cart-icon"/>
                    </div>
                </Link>
            </div>
    
            
        </nav>
    )
}

export default Navbar
