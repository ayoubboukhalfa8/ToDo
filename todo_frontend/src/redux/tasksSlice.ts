import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../lib/api'

export const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
  const response = await api.get('/tasks')
  return response.data
})

interface TaskState {
  list: any[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: TaskState = {
  list: [],
  status: 'idle'
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default tasksSlice.reducer
