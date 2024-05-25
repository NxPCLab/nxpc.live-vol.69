import React from 'react';
import styles from 'styles/infoCenter.module.css';

export default function Information() {
    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <div className={styles.title}>Infomation</div>
                <span className={styles.place}>
                    会場
                    <br />
                </span>
                <span className={styles.address}>
                    〒503-0006 <br />
                    岐阜県大垣市加賀野４丁目１−７
                    <br />
                    情報科学芸術大学院大学センタービル3階
                    <br />
                </span>
                <span className={styles.dateTime}>
                    開催日時
                    <br />
                </span>
                <span className={styles.time}>
                    6/15(Sat)
                    <br />
                    17:00 ~ 21:00
                </span>
                <div className={styles.rectangleContainer}>
                    <iframe
                        className={styles.rectangle}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.5201641935428!2d136.6370136757738!3d35.367552772690104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003b3c7cf25fe9d%3A0x85a8c98336d432fd!2z5oOF5aCx56eR5a2m6Iq46KGT5aSn5a2m6Zmi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1716227994090!5m2!1sja!2sjp"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
