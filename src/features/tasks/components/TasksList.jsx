import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TasksService from '../api/TasksService'
import { retrieveTasks, setSelectedTaskForEdit, toggleEditTaskModal } from '../tasksSlice';
import DeleteTask from './DeleteTask';
import EditStatusTask from './EditStatusTask';
import EditTask from './EditTask';


export default function TasksList(props) {
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     TasksService.getAll()
    //         .then(res => res.data)
    //         .then(res => {
    //             setTasks(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }, [tasks]);


    ///////////////////////////////////////////////////////////////////////////////////////////

    const tasks = useSelector((state) => state.tasks.tasksList)
    const dispatch = useDispatch()

    const filteredTasks = tasks.filter((task) => task.status === props.filter)


    useEffect(() => {
        dispatch(retrieveTasks())
    }, [dispatch])


    // ////////////////////////////////////////////////////////////////////////////////////////


    // const initFetch = useCallback(() => {
    //     dispatch(retrieveTasks());
    // }, [dispatch])

    // useEffect(() => {
    //     initFetch()
    // }, [initFetch])

    return (
        <div className="list-group">
            <h4>{props.title}:</h4>
            {
                (filteredTasks.length === 0) ?
                    "No records found." : null
            }
            {
                filteredTasks.map((task, index) => {
                    // const isActiveClass = (index / 2) === 0 ? ' active' : ''
                    return (
                        <div key={task.id} className='list-group-item list-group-item-action' style={{ backgroundColor: 'lightblue' }}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{task.title}</h5>
                                <small style={{ color: task.status === 'completed' ? 'green' : 'red' }}>{task.status}</small>
                            </div>
                            <p className="mb-1">{task.description}</p>
                            <div className='float-right'>
                                <div className="btn btn-sm btn-success mr-2">
                                    {
                                        task.status === 'completed'
                                            ?
                                            <EditStatusTask icon="&#x2715;" taskId={task.id} type="pending" />
                                            :
                                            <EditStatusTask icon="&#10003;" taskId={task.id} type="completed" />
                                    }
                                </div>
                                <EditTask task={task} />
                                <DeleteTask taskId={task.id} />
                            </div>
                        </div>
                    );
                })
            }

        </div>

    )
}
