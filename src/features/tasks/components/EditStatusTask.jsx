import React from 'react'
import { useDispatch } from 'react-redux'
import { editStatusTask } from '../tasksSlice'

export default function EditStatusTask(props) {
    const dispatch = useDispatch();
    const handleEditStatus = (event) => {
        // event.preventDefault();
        let payload = [props.taskId, props.type];
        dispatch(editStatusTask(payload));
    }

    return (
        <>
            <button style={{ 'background': 'transparent', 'border': 'none', 'color': '#fff' }}
                onClick={handleEditStatus}>{props.icon}</button>
        </>
    )
}
