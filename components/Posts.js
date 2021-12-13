import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'leonardo',
        userImg: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        img: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        caption: "Subscribe and destroy the like button"
    },
    {
        id: '123',
        username: 'leonardo',
        userImg: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        img: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        caption: "Subscribe and destroy the like button"
    },
    {
        id: '123',
        username: 'leonardo',
        userImg: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        img: "https://avatars.githubusercontent.com/u/39065274?s=400&u=a86283549634bae5b7924bcdf2a232d274ed8b50&v=4",
        caption: "Subscribe and destroy the like button"
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post=> (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}


        </div>
    )
}

export default Posts
