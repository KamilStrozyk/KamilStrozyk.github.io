import { Link } from 'react-router-dom';
import Overviev from './Overview';
import ContactBar from './ContactBar';

export function Sidebar() {
    return (
        <aside class="flex flex-col lg:min-h-screen lg:fixed lg:w-60 mt-16  xs:flex-row bg-gray-100 lg:border-r md:border-t lg:border-t-none border-gray-200">
            <div class="sm:flex lg:flex-col  w-full  py-4 px-6 flex-shrink-1 lg:justify-center">
                <div class="my-8"/>
                <img src="https://avatars.githubusercontent.com/u/35404422?s=400&u=ff2aa1440945ee321f970be5e16f0b03cd4d11d6&v=4" class="lg:ml-4 lg:mr-0 mx-2 my-auto rounded-full border-gray-200 border-2 object-center lg:w-4/5 md:w-1/5 h-40 md:h-auto"></img>
                <hr class="my-8"/>
                <div class="mx-2 my-auto w-3/5 lg:w-full"><Overviev /></div>
                <hr class="my-8"/>
                <div class="mx-2 my-auto w-3/5 lg:w-full"><ContactBar /></div>
            </div>
        </aside >
    );
};

export default Sidebar;
