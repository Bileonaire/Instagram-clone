function MiniProfile() {
    return (
        <div className="flex items-center m-4">
             <img
                src="https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4"
                alt="avatar"
                className='cursor-pointer h-16 w-16 mr-4 rounded-full object-cover'
            />
            <div className="flex-1">
                <h2 className="font-semibold">Bileonaire FX</h2>
                <h3 className="text-gray-400">Bileonaire FX</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold ml-20">Sign Out</button>
        </div>
    )
}

export default MiniProfile
