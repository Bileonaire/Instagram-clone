import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
    const { data : session } = useSession();

    return (
        <>
        {session? (
            <div className="flex items-center m-4">
                <img
                    src={session.user.image}
                    alt="avatar"
                    className='cursor-pointer h-16 w-16 mr-4 rounded-full object-cover'
                />
                <div className="flex-1">
                    <h2 className="font-semibold">{session.user.name}</h2>
                    <h3 className="text-gray-400">{session.user.email}</h3>
                </div>

                <button onClick={signOut} className="text-blue-400 text-sm font-semibold ml-20">Sign Out</button>
            </div>
        ): (
            ''
        )}
        </>
    )
}

export default MiniProfile
