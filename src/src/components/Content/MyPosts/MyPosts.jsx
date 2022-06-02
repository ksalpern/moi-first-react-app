import React from "react";
//import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements =  props.posts.map(p => <Post message={p.message} likes={p.likes}/>); 

  let newPostElement = React.createRef();

  let onAddPost = () => {
  props.addPost();
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea onChange={onPostChange} defaultValue={props.newPostText} 
          ref={newPostElement}  ></textarea>
        </div>
        <div>
          <button onClick={ onAddPost } className={c.btn}>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
