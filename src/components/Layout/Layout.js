import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export const Layout = ({ children }) => {
    return (
        <>

            <div class="flex flex-col h-screen justify-between">
                <main class ="bg-gray-50 lg:ml-60 mt-16 lg:w-5/6">
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
