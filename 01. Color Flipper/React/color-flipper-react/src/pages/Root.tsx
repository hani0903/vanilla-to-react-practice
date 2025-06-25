import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

interface BgColorContextType {
    bgColor: string;
    setBgColor: (color: string) => void;
}

export const BgColorContext = React.createContext<BgColorContextType>({
    bgColor: '',
    setBgColor: () => {},
});

function RootLayout() {
    const [bgColor, setBgColor] = useState<string>('rgb(241, 245, 248)');

    return (
        <BgColorContext.Provider value={{ bgColor, setBgColor }}>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className={`flex-1 grid place-content-center`} style={{ backgroundColor: bgColor }}>
                    <Outlet />
                </main>
            </div>
        </BgColorContext.Provider>
    );
}

export default RootLayout;
