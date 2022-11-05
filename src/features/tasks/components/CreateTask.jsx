import React from 'react'
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { createTask, toggleCreateTaskModal } from '../tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function CreateTask(props) {
    const isCreateTaskModalOpen = useSelector((state) => state.tasks.isCreateTaskModalOpen)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createTask(formData));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
            <Sidebar visible={isCreateTaskModalOpen} position="right" style={{ width: '500px' }}
                onHide={() => dispatch(toggleCreateTaskModal(false))}>
                <h3>Create Task</h3>
                <div className="grid p-fluid">
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <InputText name="title" onChange={handleChange} />

                        <label>Description</label>
                        <InputText name="description" onChange={handleChange} />
                        <Button type="submit" className="mt-3" label="Save" />
                    </form>
                </div>
            </Sidebar>
        </>
    )
}
