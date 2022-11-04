import React from 'react'
import { useDispatch } from 'react-redux'
import { editStatusTask } from '../tasksSlice'

export default function EditStatusTask(props) {
    const dispatch = useDispatch()
    const handleUpdateStatus = (event) => {
        let payload = [props.taskId, props.type]
        dispatch(editStatusTask(payload))
    }

    return (
        <>
            {/* <button className='btn btn-sm btn-primary mr-2'>Edit Status</button> */}
            <div onClick={handleUpdateStatus}>{props.icon}</div>
        </>
    )
}
