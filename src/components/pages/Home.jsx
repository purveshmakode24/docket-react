import React from 'react'
import Counter from '../../features/counter/components/Counter';
import Tasks from '../../features/tasks/components/Tasks';

export const Home = () => {
    return (
        <>
            {/* <div className='counter text-center p-3'>
                <Counter />
            </div> */}
            <div className='tasks'>
                <Tasks />
            </div>
        </>
    )
}
