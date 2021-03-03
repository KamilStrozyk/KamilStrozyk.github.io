import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <aside class="lg:flex flex-col lg:flex-row lg:min-h-screen lg:fixed md:w-60 mt-16  sm:top-0 xs:w-full bg-gray-100 border-r border-gray-200">
            <div class="flex flex-col w-full  dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 mt-4 ml-6">
                <img src="https://avatars.githubusercontent.com/u/35404422?s=400&u=ff2aa1440945ee321f970be5e16f0b03cd4d11d6&v=4" class="rounded-full border-gray-200 border-2 object-center lg:w-4/5"></img>
            </div>
        </aside >
    );
};

export default Sidebar;
