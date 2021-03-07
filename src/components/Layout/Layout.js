import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar/Sidebar'
export const Layout = ({ children }) => {
    return (
        <>
            <div class="flex flex-col h-screen justify-between bg-gray-50">
                <main class="lg:ml-60 mt-16 lg:w-5/6">
                    <div class="container mx-auto px-4">{children}
                    </div>
                </main>
                <Navbar />
                <Sidebar />
            </div>
        </>
    )
}

export default Layout;
