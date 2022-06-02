import c from './FriendsPhoto';


const FriendsPhoto = (props) => {
    return (
      <div>
        <div className={`${c.avatar} ${c.active}`}>
          <img
            src={props.friends.photo} alt="baby Yoda"/>
        </div>
    
      </div>
    );
}
export default FriendsPhoto;
