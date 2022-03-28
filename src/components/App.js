import React from "react";
import video from "../data/video.js";
import Likes from "./Likes.js"
import Comments from "./Comments.js"

function App() {
 
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"

      />
     
      <div>
      <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
      </div>
      <Likes video={video}/>
   
      <Comments video={video}/>
      
    </div>
   


  );
}

export default App;
