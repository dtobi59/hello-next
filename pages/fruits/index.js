import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FruitsList({fruits}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fruits list 
        </h1>

   

        <ul>
          {fruits.map((fruit)=>(
              <li>
                <Link href={"/fruits/"+fruit.id}><a>{fruit.name}</a></Link>
              </li>
          ))}
       
        </ul>
        </main>
    </div>
  )
  }

  export async function getServerSideProps() {
    const req = await fetch(`http://localhost:3000/fruits.json`)
    const _fruits = await req.json()
    console.log(_fruits)
    return {
        props: { fruits: _fruits },
    }
}

