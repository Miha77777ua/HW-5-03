import style from "./Statistics.module.scss";

export const Statistics = ({ title, stats }) => {
  const genRandColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");

  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style["stat-list"]}>
        <li style={{ backgroundColor: genRandColor() }} className={style.item}>
          <span className={style.label}>{stats[0].label}</span>
          <span className={style.percentage}>{stats[0].percentage}%</span>
        </li>
        <li style={{ backgroundColor: genRandColor() }} className={style.item}>
          <span className={style.label}>{stats[1].label}</span>
          <span className={style.percentage}>{stats[1].percentage}%</span>
        </li>
        <li style={{ backgroundColor: genRandColor() }} className={style.item}>
          <span className={style.label}>{stats[2].label}</span>
          <span className={style.percentage}>{stats[2].percentage}%</span>
        </li>
        <li style={{ backgroundColor: genRandColor() }} className={style.item}>
          <span className={style.label}>{stats[3].label}</span>
          <span className={style.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  )
}

