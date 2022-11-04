import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TasksService from './api/TasksService'

export const retrieveTasks = createAsyncThunk(
    "tasks/retrieve",
    async () => {
        const res = await TasksService.getAll()
        // return res.data;
        return res;
    }
);

export const createTask = createAsyncThunk(
    "task/create",
    async (payload) => {
        const res = await TasksService.create(payload);
        console.log(payload)
        return res;
    }
);

export const editStatusTask = createAsyncThunk(
    "task/editStatus",
    async ([id, statusType]) => {
        const res = await TasksService.editStatus(id, statusType);
        return res;
    }
);

export const deleteTask = createAsyncThunk(
    "task/delete",
    async (id) => {
        const res = await TasksService.remove(id);

        return res;
    }
);


const initialState = {
    "tasksList": [],
    "isCreateTaskModalOpen": false
}

export const tasksSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggleCreateTaskModal: (state) => {
            state.isCreateTaskModalOpen = !state.isCreateTaskModalOpen
        },
    },
    extraReducers: {
        [retrieveTasks.fulfilled]: (state, action) => {
            // return [...action.payload.data];
            // state.tasksList = [...action.payload.data];
            state.tasksList = [...action.payload];
        },
        [createTask.fulfilled]: (state, action) => {
            state.tasksList.push(action.payload);
        },
        [editStatusTask.fulfilled]: (state, action) => {
            let task = state.tasksList.filter(({ id }) => id === action.payload.id)[0];
            task.status = action.payload.status;
        },
        [deleteTask.fulfilled]: (state, action) => {
            let index = state.tasksList.findIndex(({ id }) => id === action.payload.id);
            state.tasksList.splice(index, 1);
        },
    },
});

export const { toggleCreateTaskModal } = tasksSlice.actions

export default tasksSlice.reducer
