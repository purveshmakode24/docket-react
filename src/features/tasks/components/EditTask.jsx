import React from 'react'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Sidebar } from 'primereact/sidebar'
import { editTask, toggleEditTaskModal } from '../tasksSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function EditTask(props) {
    const dispatch = useDispatch()
    const isEditTaskModalOpen = useSelector((state) => state.tasks.isEditTaskModalOpen)
    const [updateformData, setUpdateFormData] = useState({
        title: props.task.title,
        description: props.task.description
    })

    const handleEditSubmit = (event) => {
        event.preventDefault();
        let updatePayload = [props.task.id, updateformData];
        dispatch(editTask(updatePayload));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateFormData({ ...updateformData, [name]: value });
    }


    return (
        <>
            <button className='btn btn-sm btn-primary mr-2' onClick={() => dispatch(toggleEditTaskModal(true))}>Edit</button>
            <Sidebar visible={isEditTaskModalOpen} position="right" style={{ width: '500px' }}
                onHide={() => dispatch(toggleEditTaskModal(false))}>
                <h3>Edit Task</h3>
                <div className="grid p-fluid">
                    <form onSubmit={handleEditSubmit}>
                        <label>Title</label>
                        <InputText name="title" defaultValue={props.task.title} onChange={handleChange} />

                        <label>Description</label>
                        <InputText name="description" defaultValue={props.task.description} onChange={handleChange} />
                        <Button type="submit" className="mt-3" label="Save" />
                    </form>
                </div>
            </Sidebar>
        </>
    )
}
