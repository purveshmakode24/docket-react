import React from 'react'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Sidebar } from 'primereact/sidebar'
import { editTask, setSelectedTaskForEdit, toggleEditTaskModal } from '../tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


export default function EditTask(props) {
    const dispatch = useDispatch()
    const isEditTaskModalOpen = useSelector((state) => state.tasks.isEditTaskModalOpen)
    const selectedTask = useSelector((state) => state.tasks.selectedTask)
    const [updateformData, setUpdateFormData] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        setUpdateFormData({
            title: selectedTask?.title,
            description: selectedTask?.description
        })
    }, [selectedTask])


    const handleEditSubmit = (event) => {
        event.preventDefault();
        let updatePayload = [selectedTask?.id, updateformData];
        dispatch(editTask(updatePayload));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateFormData({ ...updateformData, [name]: value });
    }

    const handleEditTaskButtonClick = (task) => {
        dispatch(setSelectedTaskForEdit({ ...task }))
        dispatch(toggleEditTaskModal(true));
    }


    return (
        <>
            <button className='btn btn-sm btn-primary mr-2' onClick={() => handleEditTaskButtonClick(props.task)}>Edit</button>
            <Sidebar visible={isEditTaskModalOpen} position="right" style={{ width: '500px' }}
                onHide={() => dispatch(toggleEditTaskModal(false))}>
                <h3>Edit Task</h3>
                <div className="grid p-fluid">
                    <form onSubmit={handleEditSubmit}>
                        <label>Title</label>
                        <InputText name="title" defaultValue={updateformData?.title} onChange={handleChange} />

                        <label>Description</label>
                        <InputText name="description" defaultValue={updateformData?.description} onChange={handleChange} />
                        <Button type="submit" className="mt-3" label="Save" />
                    </form>
                </div>
            </Sidebar>
        </>
    )
}
