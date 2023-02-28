import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Costom404 = () => {
    const router = useRouter();

    useEffect(
        () => {
            setTimeout(()=> {
                router.push('/')
            },2000)
        }, [])
    return (
        <div className='title-not-found'>Halaman tidak ditemukan</div>
    )
}

export default Costom404