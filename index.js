import React from "react";
import ReactDOM from 'react-dom';
import {Header} from './Header';

const Init = () => {
    console.log('Header', Header)
    ReactDOM.render(<Header />,  document.querySelector("#Header"))
}

Init()