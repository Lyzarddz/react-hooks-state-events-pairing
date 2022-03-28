import React, {useState} from "react";

function Likes ({video}) {
    const [likes, setLikes] = useState(video.upvotes);
    const [dislikes, setDislikes] = useState(video.downvotes);

    function handleLike(){
        setLikes(likes + 1);
    }

    function handleDislikes(){
        setDislikes(dislikes + 1);
    }


    return (
        <div>
            <button onClick={handleLike}> 👍  {likes}</button>
            <button onClick={handleDislikes}> 👎  {dislikes} </button>
        </div>
    )

}
export default Likes;