import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../tasksSlice'

export default function DeleteTask(props) {
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteTask(props.taskId))
    }

    return (
        <>
            <button className='btn btn-sm btn-danger' type="button" onClick={handleDelete}>
                Delete
            </button>
        </>
    )
}
