import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export const Layout = ({ children }) => {
    return (
        <>

            <div class="flex flex-col h-screen justify-between">
                <Sidebar />
                <main class ="bg-gray-200 lg:mr-72 lg:w-5/6">{children}</main>
                <Navbar />
            </div>
        </>
    )
}

export default Layout;
