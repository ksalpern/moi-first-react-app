import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts'

const Content = () => {
    return  (
        <div >
        <div>
      <img className={s.img} src='https://na-dache.pro/uploads/posts/2021-05/1620984706_18-p-greipfrut-foto-20.jpg' alt='lemon'></img>
      </div>
      
      <div>
        ph+descript
      </div>
      
     <MyPosts/>
      
      
      </div>
    );
}
export default Content;