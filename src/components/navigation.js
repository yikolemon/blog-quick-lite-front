import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact me',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation({user}) {

    const[menuActive,setMenuActive]=useState(false)

    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">
                My React Blog
            </span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }
                </ul>
                <span>
                    <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} size={38}>U</Avatar>
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                <q-icon name="ion-ios-square-outline" />
            </div>
        </nav>
    );
}
