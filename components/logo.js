import Image from 'next/image';
import NxPC_logo from 'images/NxPC_logo.png'; // NxPC_logo のパスを適切に指定してください
import styles from 'styles/logo.module.css'; // スタイルシートをインポート

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <Image
                src={NxPC_logo}
                alt="NxPC Logo"
                layout="responsive"
                width={88}
                height={88}
                priority
                placeholder="blur"
                className={styles.logoImage} // スタイルクラスを適用
            />
            <span className={styles.logoText}>NxPC.Lab</span>
        </div>
    );
}
