import React,{useState} from 'react'
import './Box.css';

export default function Box({color, handleClick}) {

    const [borderColor, setBorderColor] = useState('black');

    const handleBtnClick = () => {
        handleClick(color);
        setBorderColor(color);
    } 

    return (
        <div className="box-container" style={{border: `solid ${borderColor}`}}>
           <p style={{color: `${borderColor}`}}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> 
            <br/>
            <button onClick={() => handleBtnClick()} className="btn-style" style={{border: `solid ${color}`, color: 'white', backgroundColor: `${color}`}}>Click Me</button>
        </div>
    )
}
