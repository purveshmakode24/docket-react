import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    function incrementing() {
        dispatch(increment())
    }

    function decrementing() {
        dispatch(decrement())
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={incrementing}
                >
                    Increment
                </button>
                <span className='p-4'>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={decrementing}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}