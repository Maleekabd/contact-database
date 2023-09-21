import React from 'react'

const Items = (props) => {
    return (
        <>
            <div className='w-6/12 border border-white border-dashed rounded-lg my-5 p-5'>
                <div>{props.name}</div>
                <div>{props.email}</div>
            </div>
        </>
    )
}

export default Items