import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(el =>
        <FriendListItem avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
      )}
    </ul>
  )
}

