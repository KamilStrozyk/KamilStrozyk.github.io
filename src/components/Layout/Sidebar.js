import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <div class="lg:flex flex-col lg:flex-row lg:min-h-screen lg:fixed right-0 sm:top-0 xs:w-full">
            <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
                <div class="w-full flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <Link to="/" class="text-xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Kamil Stróżyk</Link>
                </div>
                <nav class="flex-grow md:block md:pb-0 md:overflow-y-auto xs:hidden">
                   
                </nav>
            </div>
        </div >
    );
};

export default Sidebar;
