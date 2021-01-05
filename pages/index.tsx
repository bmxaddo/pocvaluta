import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={'style'}>
            <div>
                <h1>
                    Valuta Kurser Page
                </h1>
                <div className={styles.linkContainer}>
                    <Link href={'/contact'}>Contact page</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={'/classComponent'}>Check class components</Link>
                </div>
                <div className={styles.linkContainer}>
                    <a href='https://www.euroinvestor.dk/markeder/aktier'>Euro investor</a>
                </div>
            </div>
        </div>
    )
}
