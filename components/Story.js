function Story({ username, img}) {
    return (
        <div>
            <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
                            object-contain cursor-pointer hover:scale-110 transition
                            transform duration-200 ease-out"
                src="https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4"
                alt=""
            />
            <p className="w-14 text-xs truncate text-center">{username}</p>
        </div>
    )
}

export default Story
