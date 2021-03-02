import { Link } from 'react-router-dom';

export function Navbar() {
    return (

        <nav class="sm:relative md:self-center md:bottom-0 md:fixed object-bottom select-none  text-gray-700 bg-transparent dark-mode:text-gray-200 dark-mode:bg-gray-800   md:items-stretch">
            <div class="md:flex md:items-stretch md:flex-no-shrink md:flex-grow">
                <div class="md:flex md:items-stretch md:justify-center ml-auto">
                    <Link to="/" class="block px-4 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline border-gray-900 border-r-2">Home</Link>
                    <Link to="/about" class="block px-5 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline ">About</Link>
                    <Link to="/contact" class="block px-4 py-2  text-sm font-semibold text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 bg-white hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline border-gray-900 border-l-2">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
