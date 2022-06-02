import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return  (
       
      
     <div className={s.item}>
       <img className={s.img} src='https://m.mac-cosmetics.ru/media/export/cms/products/640x600/mac_sku_MW3C09_640x600_3.jpg' alt='photto'></img>
       { props.message }
       <div>
         <span>{props.likes} likes </span>
       </div>
     </div>
     );
}

export default Post;