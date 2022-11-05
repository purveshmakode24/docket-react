import React from 'react'
import { useDispatch } from 'react-redux'
import { editStatusTask } from '../tasksSlice'

export default function EditStatusTask(props) {
    const dispatch = useDispatch();
    const handleEditStatus = (event) => {
        event.preventDefault();
        let payload = [props.taskId, props.type];
        dispatch(editStatusTask(payload));
    }

    return (
        <>
            {/* <button className='btn btn-sm btn-primary mr-2'>Edit Status</button> */}
            <div onClick={handleEditStatus}>{props.icon}</div>
        </>
    )
}
