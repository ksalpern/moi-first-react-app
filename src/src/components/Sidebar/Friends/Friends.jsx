import c from './Friends.module.css';
import FriendsItems from './FriendsItem/FriendsItem';
import FriendsPhoto from './FriendsPhoto/FriendsPhoto';

const Friend = (props) => {
    let friendElements = props.friends.map((f) => <FriendsItems name={f.name} id={f.id} />);
    return (
      <div>
       <FriendsPhoto/>
        <div className={`${c.name} ${c.active}`}>
       
        <div className={c.FriendsItems}>{friendElements}</div>
        </div>
      </div>
    );
}
export default Friend;
