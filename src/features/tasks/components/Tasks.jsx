
import React, { useCallback, useEffect, useState } from 'react'
import TasksList from './TasksList';
import CreateTask from './CreateTask';


export default function Tasks() {
    return (
        <>
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
