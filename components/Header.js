import Link from 'next/link'

import styles from '../assets/components/Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.headerImg} src="/logo.png" alt="logo" />
      </Link>
      <nav className={styles.headerNav}>
        <span>{props.title}</span>
      </nav>
      <a></a>
    </header>
  )
}
