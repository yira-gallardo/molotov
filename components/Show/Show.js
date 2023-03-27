import styles from "@/styles/Show.module.css";

export const Show = ({ date, venue, city, tickets }) => {
  return (
    <div className={styles.showsItem}>
      <div className={styles.left}>{date}</div>
      <div className={styles.center}>{city}</div>
      <div className={styles.right}>
        {venue}
        <div className={styles.button}>
          <a href={tickets} target="_blank" rel="noreferrer">
            Boletos
          </a>
        </div>
      </div>
    </div>
  );
};
