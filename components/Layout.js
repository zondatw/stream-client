import Header from '../components/Header'

import styles from '../assets/components/Layout.module.css'

export default function Layout(props) {
  return (
    <div>
      <Header title={props.title} />
      <div className={styles.layoutChild}>
        {props.children}
      </div>
    </div>
  )
}
