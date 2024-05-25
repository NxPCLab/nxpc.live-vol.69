import { useEffect } from 'react';
import styles from 'styles/nav.module.css';

export default function Nav() {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href").slice(1);

            if (targetId === 'top') {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                return;
            }

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const header = document.querySelector('header');
                const headerOffset = header ? header.offsetHeight : 0;

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll(`.${styles.link}`);
        links.forEach(link => {
            link.addEventListener("click", handleScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener("click", handleScroll);
            });
        };
    }, []);

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <a href="#top" className={styles.link}>Top</a>
                </li>
                <li>
                    <a href="#about" className={styles.link}>About</a>
                </li>
                <li>
                    <a href="#info" className={styles.link}>Info</a>
                </li>
                <li>
                    <a href="#timetable" className={styles.link}>Timetable</a>
                </li>
                <li>
                    <a href="#performer" className={styles.link}>Performer</a>
                </li>
            </ul>
        </nav>
    );
}
