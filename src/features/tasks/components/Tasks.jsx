
import TasksList from './TasksList';

export default function Tasks() {

    return (
        <>
            <div className='new-tasks'>
                <h4>New Tasks:</h4>
                <div className="posts-container">
                    <TasksList filter="pending" />
                </div>
            </div>
            <div className='completed-tasks pt-4'>
                <h4>Completed Tasks:</h4>
                <div className="posts-container">
                    <TasksList filter="completed" />
                </div>
            </div>
        </>
    )
}
