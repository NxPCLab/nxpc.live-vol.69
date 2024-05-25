import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faXTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import styles from 'styles/social.module.css'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://www.youtube.com/@nxpclab/">
                    <FontAwesomeIcon icon={faYoutube} />
                    <span className="sr-only">YouTube</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/nxpclab">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <span className="sr-only">X</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/nxpc.lab?igsh">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                </a>
            </li>
        </ul>
    )
}
