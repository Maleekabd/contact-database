import React from 'react'
import Items from './Items'

const users = [
    {
        name: "Malik Abddurasyid",
        email: "malikabdurrasyid86@gmail.com"
    },
    {
        name: "Malik Abdurrasyid (2)",
        email: "malikabdurrasyid16@gmail.com"
    }
]

const List = () => {

    return (
        <div>
            {
                users.map(user => (
                    <Items {...user} />
                ))
            }
        </div>
    )
}

export default List;