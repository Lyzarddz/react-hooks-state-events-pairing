
import React, {useState} from "react";

function Comments({video}){
    const comments = video.comments;
    const [commentsVisible, setCommentsVisible] = useState(true)

    function hideComments(){
        setCommentsVisible(commentsVisible => !commentsVisible)
       
    }


    return(
        <div>
            <p>
            <button onClick={hideComments}>{commentsVisible ? "Hide Comments" : "Show Comments"}</button>
            </p>

           

            {commentsVisible && (<p> 
                <h2>{comments.length} Comments</h2>
                {comments.map((comment) => {
                return(
                    <div>
                        <h3> {comment.user}</h3>
                        <p> {comment.comment}</p>

                    </div>
                )
            })}

            </p>)}


        </div>
    )



}

export default Comments;