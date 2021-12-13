import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className="bg-white my-7 border rounded-sm shadow-md">
            <div className="flex p-2 items-center">
                <img className="rounded-full h-12 w-12 p-1 mr-3 object-contain border" src={userImg} alt="" />
                <p className="flex-1 font-semibold">{username}</p>
                <DotsHorizontalIcon className="h-5"   />
            </div>
            <img src={img} className="object-cover w-full max-h-[1200px]" alt="" />
            <div className="flex justify-between px-4 pt-4 h-10 items-center">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>

                <BookmarkIcon className="btn" />
            </div>
            <p className="p-4 truncate">
                <span className="font-semibold mr-1">{username} </span>{caption}
            </p>

            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input
                    type="text"
                    placeholder="Add a Comment"
                    className="outline-none border-none flex-1 focus:ring-0"
                />
                <button className="text-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post


