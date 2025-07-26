import style from "./FriendListItem.module.scss";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span style={{ backgroundColor: isOnline ? "green" : "red" }} className={style.status}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  )
}

