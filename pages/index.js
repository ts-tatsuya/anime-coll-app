import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AniList from '../Components/ani-list'
import {useRouter} from 'next/router'
import HeaderSection from '../Components/header-section'
import { useEffect } from 'react'



export default function Home() {
  
  const router = useRouter();
  console.log(router.query);

  // const testerData = {
  //   collName: "test",
  //   collList:
  //   [{
  //     order: 1,
  //     id: 123456
  //   },
  //   {
  //     order: 3,
  //     id: 654321
  //   },{
  //     order: 5,
  //     id: 135246
  //   },
  //   {
  //     order: 2,
  //     id: 642531
  //   },{
  //     order: 4,
  //     id: 134652
  //   }]
  // }
  // useEffect(() => {
  //   localStorage.setItem('data', JSON.stringify(testerData));
  //   console.log(JSON.parse(localStorage.getItem('data')));
  // });
  
  
  return (

    <div className={styles.container}>
      
      

      <AniList></AniList>
      
      {/* <AniPages id={10863}></AniPages> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>

  )
}
