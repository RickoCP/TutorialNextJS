/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
    <p>next Link</p>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link href="/imageOptimization">Image Optimization</Link>
      </li>
      <li className={styles.item}>
        <Link href="/users">Users</Link>
      </li>
      <li className={styles.item}>
        <Link href="/blogs">Blogs</Link>
      </li>
    </ul>
    <p>a tag</p>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="/">Home</a>
      </li>
      <li className={styles.item}>
        <a href="/imageOptimization">Image Optimization</a>
      </li>
      <li className={styles.item}>
        <a href="/users">Users</a>
      </li>
      <li className={styles.item}>
        <a href="/blogs">Blogs</a>
      </li>
    </ul>
  </header>

  )
}

export default Header