
import React, { useCallback, useEffect, useState } from 'react'
import TasksList from './TasksList';
import { Button } from 'primereact/button';
import CreateTask from './CreateTask';
import { useDispatch } from 'react-redux';
import { toggleCreateTaskModal } from '../tasksSlice';


export default function Tasks() {
    const dispatch = useDispatch()
    return (
        <>
            <Button icon="pi pi-plus" label="Task" onClick={() => dispatch(toggleCreateTaskModal(true))} className="mr-2" />
            <CreateTask />
            <hr />
            <div className='new-tasks'>
                <div className="posts-container">
                    <TasksList title='New Tasks' filter="pending" />
                </div>
            </div>
            <hr />
            <div className='completed-tasks pt-4'>
                <div className="posts-container">
                    <TasksList title='Completed Tasks' filter="completed" />
                </div>
            </div>
        </>
    )
}
