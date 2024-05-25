import MonoLogo from './monoLogo';
import Container from 'components/container';
import Social from 'components/social';
import styles from 'styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <MonoLogo />
                    <Social />
                </div>
            </Container>
        </footer>
    );
}
