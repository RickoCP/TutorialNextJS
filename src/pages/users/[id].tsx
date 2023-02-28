import Layout from '@/components/Layout';
import React from 'react'

interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: UserInterface;
}

const UserDetailPage = (props: UserDetailProps) => {
  const { user } = props

  return (
    <Layout pageTitle='User Detail'>
      <>
        <p>
          {user.name}
        </p>
        <p>
          {user.email}
        </p>
        <p>
          {user.phone}
        </p>
        <p>
          {user.website}
        </p>
      </>

    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: UserInterface) => ({
    params: {
      id: `${user.id}`,
    }
  }));

  return {
    paths,
    fallback: false
  }
}

interface GetStaticPropsInterface {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: GetStaticPropsInterface) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    }
  }
}

export default UserDetailPage