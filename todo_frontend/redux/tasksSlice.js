import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../lib/api'

export const fetchTasks = createAsyncThunk('tasks/fetch', async ()=>{
  const res = await api.get('/tasks/')
  return res.data
})

export const addTask = createAsyncThunk('tasks/add', async (payload)=>{
  const res = await api.post('/tasks/', payload)
  return res.data
})

export const updateTask = createAsyncThunk('tasks/update', async ({id,title})=>{
  const res = await api.put(`/tasks/${id}`, {title})
  return res.data
})

export const deleteTask = createAsyncThunk('tasks/delete', async (id, thunkAPI)=>{
  await api.delete(`/tasks/${id}`)
  return id
})

export const bulkDelete = createAsyncThunk('tasks/bulkDelete', async (ids)=>{
  await api.post('/tasks/bulk-delete', ids)
  const res = await api.get('/tasks/')
  return res.data
})

const tasksSlice = createSlice({
  name:'tasks',
  initialState:{ list: [], loading:false },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTasks.pending, (state)=>{ state.loading=true })
    builder.addCase(fetchTasks.fulfilled, (state,action)=>{ state.loading=false; state.list = action.payload })
    builder.addCase(fetchTasks.rejected, (state)=>{ state.loading=false })
    builder.addCase(addTask.fulfilled, (state,action)=>{ state.list.push(action.payload) })
    builder.addCase(updateTask.fulfilled, (state,action)=>{
      state.list = state.list.map(t=> t.id===action.payload.id ? action.payload : t)
    })
    builder.addCase(deleteTask.fulfilled, (state,action)=>{
      state.list = state.list.map(t=> t.id===action.payload ? {...t, deleted:true} : t)
    })
    builder.addCase(bulkDelete.fulfilled, (state,action)=>{ state.list = action.payload })
  }
})

export default tasksSlice.reducer
