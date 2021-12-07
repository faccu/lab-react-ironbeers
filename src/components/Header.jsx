import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return (
        <nav>
            <div>
                <Link to="/">HOME</Link>
            </div>
        </nav>
    );
}