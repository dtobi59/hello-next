import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'


export default function Fruit({ fruit }) {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>{fruit.name} {fruit.id}</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {fruit.name}

                    
                    
                </h1>

                <img src={fruit.image} width="300px" />

                <Link href="/fruits">Back</Link>



            </main>
            

        </div>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/fruits.json`)
    const fruits = await req.json()
    //[
    //     {
    //         id: "1",
    //         name: "Mango",
    //         image: "https://media.istockphoto.com/photos/mango-picture-id168370138?s=612x612"
    //     },
    //     {
    //         id: "2",
    //         name: "Orange",
    //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/440px-Oranges_-_whole-halved-segment.jpg"
    //     },
    //     {
    //         id: "3",
    //         name: "Pawpaw",
    //         image: "https://digitalprodyatesauweb.blob.core.windows.net/cache/3/1/b/0/9/7/31b097fa6caf48b0c595d7477765f0a02ff5ff37.webp"
    //     }
    
    
    // ]
    var _fruit =  fruits.find((fruit)=>{
        return fruit.id == params.id
    });


    return {
        props: { fruit: _fruit },
    }
}
