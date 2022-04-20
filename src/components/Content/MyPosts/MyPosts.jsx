import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return  (
       
      <div>
      <div>
        my posts
      </div>
     <div>
      <textarea></textarea>
      <button className={s.btn}>Add post</button>
     </div>
     
    <Post message='Hey there. How u doing?' likes='10'/>
    <Post message="It's my first post" likes='8'/>
    <Post  message='Whatsaap' likes='96'/>
    </div>);
}

export default MyPosts;