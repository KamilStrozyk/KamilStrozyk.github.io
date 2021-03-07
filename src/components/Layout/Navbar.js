import { Link } from 'react-router-dom';

export function Navbar() {
    return (

        <nav class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
            <Link to="/" class="text-xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white">Kamil Stróżyk</Link>
            <div class="flex flex-row object-center">
                <Link to="/" class="transition duration-300 ease-in-out  block px-4 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline border-gray-300 border-r-2 border-l-2">Home</Link>
                <Link to="/about" class="transition duration-300  block px-5 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline border-gray-300 border-l-1 border-r-1">About</Link>
                <Link to="/contact" class="transition duration-300  block px-4 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline border-gray-300 border-l-2 border-r-2">Contact</Link>
            </div>
        </nav>

    );
};

export default Navbar;
