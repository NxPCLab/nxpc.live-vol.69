import Image from 'next/image';
import styles from 'styles/performer.module.css';
import blackRat from 'images/BlackRat.jpg';

export default function Performer() {
    const imageUrls = [
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
        blackRat,
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>Performer</div>
            {imageUrls.map((url, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={url}
                        alt={`Image ${index + 1}`}
                        layout="responsive"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <div className={styles.text}>あああああああああ</div>
                </div>
            ))}
        </div>
    );
}
