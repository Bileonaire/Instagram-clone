import { useState, useEffect } from 'react';
import faker from  "faker";

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggest = [...Array(6)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }));
        setSuggestions(suggest);
    }, [])


    return (
        <div>
            <div className="mt-4 ml-4 pr-4 border-b-2">
                <div className="flex justify-between text-sm mb-5">
                    <h3 className="text-gray-400">Suggestions For You</h3>
                    <button className="text-gray-600 text-sm font-semibold">See all</button>
                </div>

                {suggestions.map((profile) => (
                    <div key={profile.id} className="flex items-center my-2">
                        <img
                            src="https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4"
                            alt=""
                            className="rounded-full h-10 w-10 mr-4 object-cover border p-[2px]" />
                        <div className="flex-1">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-gray-400 text-xs">{profile.company.name}</h3>
                        </div>
                        <button className="text-blue-400 cursor-pointer text-xs font-bold">Follow</button>
                    </div>
                ))}
            </div>

            <div className="text-gray-400 flex text-xs mt-4 flex-wrap w-[400px] mb-5 ml-4">
                <button>About </button>
                <button>- Help -</button>
                <button>API -</button>
                <button>Privacy - </button>
                <button>Terms -</button>
                <button>Top -</button>
                <button>accountsHashtags -</button>
                <button>accounts -</button>
                <button>Language -</button>
            </div>

            <p className="text-sm text-gray-400 m-4">© 2021 INSTAGRAM FROM META</p>
        </div>


    )
}


export default Suggestions