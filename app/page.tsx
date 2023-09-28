import Image from 'next/image'
import styles from './page.module.css'
import HelloWorld from './components/common/hello'
import CardComponent from './components/common/card'
export default function Home() {
  return (
    <main className={styles.main}>
      
      <CardComponent/>
    </main>
  )
}
