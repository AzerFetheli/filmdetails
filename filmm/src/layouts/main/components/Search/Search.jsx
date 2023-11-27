import React, { useRef } from 'react'
import './Search.css'

export default function Search({ setQuery }) {
    const input = useRef(null);
    const HandleSubmit = (e) => {
        e.preventDefault()
        setQuery(input.current.value)
    }
    return (
        <div className='Search'>
            <form onSubmit={HandleSubmit}>
                <input ref={input} type="text" />
                <button type='submit'>Search</button>
            </form>
        </div>

    )
}
