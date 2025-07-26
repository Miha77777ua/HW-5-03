import { FriendListItem } from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.scss";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style["friend-list"]}>
      {friends.map((el, id) =>
        <FriendListItem avatar={el.avatar} name={el.name} isOnline={el.isOnline} key={id} />
      )}
    </ul>
  )
}

