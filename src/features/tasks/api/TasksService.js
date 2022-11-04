import http from "../../../http-common";

const getAll = () => {
    // return http.get("./tasks_dummy.json");
    return JSON.parse(localStorage.getItem('tasksList')) || [];
};

const get = id => {
    return http.get(`/tasks/${id}`);
};

const create = data => {
    // return http.post("/tasks", data);
    let taskList = [];
    let maxTaskId = 0;
    if (localStorage.getItem('tasksList') != null) {
        taskList = JSON.parse(localStorage.getItem('tasksList'));
        if (taskList.length !== 0) {
            maxTaskId = [...taskList].sort((a, b) => b.id - a.id)[0].id;
            maxTaskId += 1;
        }
    }

    data.id = maxTaskId;
    taskList.push(data);
    localStorage.setItem('tasksList', JSON.stringify(taskList))
    return data;
};

const edit = (id, data) => {
    return http.put(`/tasks/${id}`, data);
};

const editStatus = (idd, statusType) => {
    // return http.put(`/tasks/${id}`, data);
    let taskList = [];

    if (localStorage.getItem('tasksList') != null) {
        taskList = JSON.parse(localStorage.getItem('tasksList'));
        let task = taskList.filter(({ id }) => id === idd)[0];
        task.status = statusType;
        localStorage.setItem('tasksList', JSON.stringify(taskList))
        return task;
    }
    return { 'error': "Could not update the status of the task." }
};

const remove = idd => {
    // return http.delete(`/tasks/${id}`);
    let taskList = [];

    if (localStorage.getItem('tasksList') != null) {
        taskList = JSON.parse(localStorage.getItem('tasksList'));
        let index = taskList.findIndex(({ id }) => id === idd);
        let deletedItem = taskList.splice(index, 1);
        localStorage.setItem('tasksList', JSON.stringify(taskList))
        return deletedItem[0];
    }
    return { 'error': "Could not delete the task." }
};

const removeAll = () => {
    return http.delete(`/tasks`);
};

const findByTitle = title => {
    return http.get(`/tasks?title=${title}`);
};

const TutorialService = {
    getAll,
    get,
    create,
    edit,
    editStatus,
    remove,
    removeAll,
    findByTitle
};

export default TutorialService;
