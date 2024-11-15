import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

const list = [
    'Despacito',
    'Shape of you',
    'See you again',
    'Uptown funk',
    'Gangnam style',
    'Sorry',
    'Sugar',
    'Roar',
    'Counting stars',
    'Thinking out loud',
    'Dark horse',
    'Lean on',
];
const randomIndex = Math.floor(Math.random() * list.length);

function Search() {
    const { searchValue, setSearchValue } = useState();
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <div>
            <h4>Find the event:</h4>
            <input
                className="Search"
                type="text"
                placeholder={list[randomIndex]}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>

    );
}

export {Search};