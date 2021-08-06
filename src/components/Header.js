import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header" >
            <div className="list" >
                <ul>
                    <li className="item" style={{color: 'black'}}> <strong> Products <FaChevronDown /> </strong> </li>
                    <li className="item"> Collections </li>
                    <li className="item"> Gifts </li>
                    <li className="item"> Our Magazine </li>
                </ul>
            </div>
            <div className="header-right" >
                <span> <FaSearch /> </span>
                <button> Log In </button>
                <button className='btn-signin' > SIGN UP </button>
            </div>
        </div>
    )
}

export default Header
