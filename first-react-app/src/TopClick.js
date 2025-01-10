import React from "react";
import './style.css';

const TopClick = () =>
{
    return(
        <div>
            <button id="top"
                style={{ position: 'fixed', bottom: '80px', right: '22px' }} 
                onClick={() => window.location.href ="#home"}
            >
               
            </button>
        </div>
    );
};

export default TopClick;