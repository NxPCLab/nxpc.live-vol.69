import styles from 'styles/timeTable.module.css';

export default function TimeTable() {
    return (
        <div>
            <div className={styles.div}>Timetable</div>
            <div className={styles.box}>
                <div className={styles.timetable}>
                    <div className={styles.schedule}>
                        <div className={styles.textWrapper}>17:00 ~　Open</div>
                        <hr className={styles.line} />
                        <div className={styles.textWrapper}>17:10 ~　GameCenter [奥野細道,小籠包,京野菜]</div>
                        <hr className={styles.line} />
                        <div className={styles.textWrapper}>17:40 ~　ニチウシオーハシ [早田,牛尾,大橋]</div>
                        <hr className={styles.line} />
                        <div className={styles.textWrapper}>18:10 ~　Nomad Sentinel [BlackRat,Syoronpo]</div>
                        <hr className={styles.line} />
                        <div className={styles.textWrapper}>18:40 ~　Rhythmos Trekkers [Fushi Sano, タカギッシュ39, 横揺れそーちゃん, ニチ門司ゴン次郎]</div>
                        <hr className={styles.line} />
                    </div>
                </div>
            </div>
        </div>
    );
}
