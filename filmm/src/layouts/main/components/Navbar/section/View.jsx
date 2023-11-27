import React from 'react'
import './View.css'
import MiddleBar from './MiddleBar'
import Title from './Title'

export default function View() {
    return (
        <div className='Pagination'>
            <MiddleBar />
            <Title/>
        </div>
    )
}
