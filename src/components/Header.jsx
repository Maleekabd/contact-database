import React from 'react'
import List from './List'

const Header = () => {
    return (
        <div className='w-full p-20'>
            <h1 className='text-3xl'>Daftar Kontak</h1>
            <List />
        </div>
    )
}

export default Header