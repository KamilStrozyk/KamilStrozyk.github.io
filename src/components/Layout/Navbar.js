import { Link } from 'react-router-dom';
import DarkModeButton from '../Layout/Buttons/DarkModeButton';
export function Navbar() {
    return (
            <nav class="flex fixed w-full items-center justify-between px-6 h-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 z-10">
                <Link to="/" class="text-xl font-semibold tracking-widest text-gray-900  uppercase rounded-lg dark:text-gray-200">Kamil Stróżyk</Link>
                <div class="flex flex-row object-center">
                <DarkModeButton />
                    <Link to="/" class="transition duration-300 ease-in-out  block px-4 py-2  text-sm font-semibold text-gray-900 dark:text-gray-200 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200  dark:bg-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-700 border-gray-300 border-r-2 border-l-2">Home</Link>
                    <Link to="/about" class="transition duration-300  block px-5 py-2  text-sm font-semibold text-gray-900 dark:text-gray-200 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200  dark:bg-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline dark:hover:bg-gray-800 dark:focus:bg-gray-700 border-gray-300 border-l-1 border-r-1">About</Link>
                    <Link to="/contact" class="transition duration-300  block px-4 py-2  text-sm font-semibold text-gray-900 dark:text-gray-200 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 dark:bg-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline dark:hover:bg-gray-800 dark:focus:bg-gray-700 border-gray-300 border-l-2 border-r-2">Contact</Link>
                </div>
            </nav>
    );
};

export default Navbar;
