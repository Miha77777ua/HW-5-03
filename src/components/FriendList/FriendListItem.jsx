export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{"Online" ? isOnline : "Offline"}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  )
}

