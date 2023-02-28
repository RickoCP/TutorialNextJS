import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <Layout pageTitle='Home Page'>
      <h1 className='title'>Welcome</h1>
      <h1 className={styles['title-homepage']}>Ricko Caesar Putra</h1>
    </Layout> 
  )
}
