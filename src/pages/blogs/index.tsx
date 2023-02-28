import Layout from '@/components/Layout'
import React from 'react'
import styles from '../../styles/Blog.module.css'

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogPropsInterface {
    dataBlog: Post[];
}

const Blog = (props: BlogPropsInterface) => {
    const { dataBlog } = props;
    return (
        <Layout pageTitle='Blog Page'>
            {dataBlog.map((blog: any) => {
                return (
                    <div
                        key={blog.id}
                        className={styles.card}
                    >
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog
        }
    }
}

export default Blog