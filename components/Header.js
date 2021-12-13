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
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
    const { data : session } = useSession();
    console.log(session);

    return (
        <div className="shadoow-sm border-b bg-white sticky top-0 z-50">
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
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                    {session? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45"/>
                                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex itemss-center justify-center animate-pulse text-white">3</div>
                            </div>
                            <UserGroupIcon className="navBtn"/>
                            <PlusCircleIcon className="navBtn"/>
                            <HeartIcon className="navBtn"/>

                            <img
                                onClick={signOut}
                                src={session.user.image}
                                alt="avatar"
                                className='cursor-pointer h-10 w-10 rounded-full object-cover'
                            />
                        </>

                    ): (
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header