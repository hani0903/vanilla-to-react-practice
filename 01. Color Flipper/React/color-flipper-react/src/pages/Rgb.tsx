import { useState } from 'react';

function Rgb() {
    const [bgColor, setBgColor] = useState<string>('rgb(241, 245, 248)');

    function handleChangeBgWithRgb() {
        const red = randomNumber();
        const green = randomNumber();
        const blue = randomNumber();
        setBgColor(`rgb(${red}, ${green}, ${blue})`);
    }
    return (
        <main className={`flex-1 grid place-content-center`} style={{ backgroundColor: bgColor }}>
            <div className={`text-center`}>
                <h2 className="font-primary bg-black text-white px-4 py-6 mb-10 font-bold rounded-md">
                    background color: <span className="text-primary-5">{bgColor}</span>
                </h2>
                <button
                    onClick={handleChangeBgWithRgb}
                    className="px-5 py-3 font-primary uppercase text-black tracking-spacing-default inline-block font-bold transition-default border-2 cursor-pointer shadow-button rounded-default text-base"
                >
                    click me
                </button>
            </div>
        </main>
    );
}

export default Rgb;

function randomNumber() {
    return Math.floor(Math.random() * 256);
}
