import Image from 'next/image';
import monoNxPC_logo from 'images/monoNxPC_logo.png';
import styles from 'styles/monoLogo.module.css';

export default function MonoLogo() {
    return (
        <div className={styles.monoLogoContainer}>
            <div className={styles.monoLogo}>
                <Image
                    src={monoNxPC_logo}
                    alt="NxPC Logo"
                    layout="intrinsic"
                    width={30}
                    height={30}
                    priority
                    placeholder="blur"
                    className={styles.monoLogoImage}
                />
                <span className={styles.monoLogoText}>NxPC.Lab</span>
            </div>
            <span className={styles.text}>Next dimension Plural media Club experience. Laboratory</span>
            <span className={styles.contact}>contact@nxpclab.info</span>
        </div>
    );
}
