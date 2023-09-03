import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span className={friend.isOnline ? css.status : css.offline}>
            {friend.isOnline}
          </span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
