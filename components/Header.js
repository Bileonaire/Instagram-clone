import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl cursor-pointer mx-5 lg:mx-auto">
                <div className='relative w-24 hidden lg:inline-grid'>
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className='relative w-10 lg:hidden flex-shrink-0'>
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className="max-w-xm">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm rounded-md border-gray-300 focus:ring-black focus:border-black" type="text" placeholder="search" />
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4 cursor-pointer">
                    <HomeIcon className="h-10 w-10"/>
                    <MenuIcon className="h-6 w-10 md:hidden"/>
                    <PaperAirplaneIcon />
                </div>

            </div>
        </div>
    )
}

export default Header
