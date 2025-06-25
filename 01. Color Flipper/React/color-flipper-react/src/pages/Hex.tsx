import React, { useContext, useEffect, useState } from 'react';
import { BgColorContext } from './Root';

const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function Hex() {
    const { bgColor, setBgColor } = useContext(BgColorContext);

    useEffect(() => {
        setBgColor('#f1f5f8');
    }, []);

    function handleChangeBgWithHex() {
        let newBg = '#';

        for (let i = 0; i < 6; i++) {
            newBg += HEX[randomNumber()];
        }

        setBgColor(newBg);
    }
    return (
        <div className={`text-center`}>
            <h2 className="font-primary bg-black text-white px-4 py-6 mb-10 font-bold rounded-md">
                background color: <span className="text-primary-5">{bgColor}</span>
            </h2>
            <button
                onClick={handleChangeBgWithHex}
                className="px-5 py-3 font-primary uppercase text-black tracking-spacing-default inline-block font-bold transition-default border-2 cursor-pointer shadow-button rounded-default text-base"
            >
                click me
            </button>
        </div>
    );
}

export default Hex;

function randomNumber() {
    return Math.floor(Math.random() * 16);
}
