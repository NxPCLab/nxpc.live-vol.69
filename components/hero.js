import styles from 'styles/hero.module.css';
import Image from 'next/image';
import cube from 'images/mainVisual.png';

export default function Hero() {
    return (
        <div className={styles.flexContainer}>
            <figure className={styles.image}>
                <Image
                    src={cube}
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1152px) 576px, (min-width: 768px) 100vw"
                    priority
                    placeholder="blur"
                />
            </figure>
        </div>
    );
}
