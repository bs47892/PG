import React, {useState} from 'react'
import {Button} from './Button'
import {Link}from 'react-router-dom'
import './NavBar.css'
import Dropdown from './Dropdown'


function NavBar() {
    const [click, setClick]= useState(false)
    const[dropdown, setDropdown] = useState(false)

    const handleClick =()=> setClick(!click)
    const closeMobileMenu=()=>setClick(false)

    const onMouseEnter=()=> {
        if(window.innerWidth<960){
            setDropdown(false);

        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave=()=> {
        if(window.innerWidth<960){
            setDropdown(false);

        }else{
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <Link to='/' 
            className='navbar-logo' >
             BookStore <i class="fa-solid fa-book-open"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick=
                    {closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <Link to='/Books' className='nav-links' onClick=
                    {closeMobileMenu}>
                        Books <i className='fas fa-caret-down'></i>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to='/accessories' className='nav-links' onClick=
                    {closeMobileMenu}>
                        Accessories & Gifts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Events' className='nav-links' onClick=
                    {closeMobileMenu}>
                       Events
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Authors' className='nav-links' onClick=
                    {closeMobileMenu}>
                        Authors
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Login' className='nav-links-mobile' onClick=
                    {closeMobileMenu}>
                        LogIn
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
        </>
    )
}

export default NavBar;