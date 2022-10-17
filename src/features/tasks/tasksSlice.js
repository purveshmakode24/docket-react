import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TasksService from './api/TasksService'

export const retrieveTasks = createAsyncThunk(
    "tasks/retrieve",
    async () => {
        const res = await TasksService.getAll()
        return res.data;
    }
);


export const deleteTasks = createAsyncThunk(
    "tasks/delete",
    async (id) => {
        // await TasksService.remove(id);
        return { id };
    }
);

const initialState = []

export const tasksSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: {
        [retrieveTasks.fulfilled]: (state, action) => {
            return [...action.payload.data];
        },
        [deleteTasks.fulfilled]: (state, action) => {
            console.log(state)
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1);
        },
    },
})

export default tasksSlice.reducer
