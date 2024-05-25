import Logo from 'components/logo';
import Nav from '@/components/nav';
import styles from 'styles/header.module.css';
import Container from 'components/container';

export default function Header() {
    return (
        <header className={styles.header}>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Nav />
                </div>
            </Container>
        </header>
    );
}
