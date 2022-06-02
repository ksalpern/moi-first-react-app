import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Content = (props) => {
    return (
      <div className={s.div}>
        <ProfileInfo />
        <MyPostsContainer store={props.store} />
      </div>
    );
}
export default Content;