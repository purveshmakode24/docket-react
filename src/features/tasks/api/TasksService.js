import http from "../../../http-common";

const getAll = () => {
    return http.get("./tasks_dummy.json");
};

const get = id => {
    return http.get(`/tasks/${id}`);
};

const create = data => {
    return http.post("/tasks", data);
};

const update = (id, data) => {
    return http.put(`/tasks/${id}`, data);
};

const remove = id => {
    return http.delete(`/tasks/${id}`);
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
    update,
    remove,
    removeAll,
    findByTitle
};

export default TutorialService;
