import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>
                    Tutorial NextJS |
                    {' '}
                    {pageTitle}
                </title>
                <meta name="description" content="Website tutorial nextJS" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    {children}
                </div>
                <Footer />
            </div>
        </>

    )
}

export default Layout