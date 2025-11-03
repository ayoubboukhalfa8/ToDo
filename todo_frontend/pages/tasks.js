import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, addTask, updateTask, deleteTask, bulkDelete } from '../redux/tasksSlice'
import Link from 'next/link'

export default function TasksPage() {
  const dispatch = useDispatch()
  const tasks = useSelector(s => s.tasks.list)
  const loading = useSelector(s => s.tasks.loading)
  const [title, setTitle] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [selected, setSelected] = useState([])

  useEffect(() => { dispatch(fetchTasks()) }, [dispatch])

  const handleAdd = async () => {
    if (!title.trim()) return
    await dispatch(addTask({ title }))
    setTitle('')
  }

  const startEdit = (t) => { setEditingId(t.id); setTitle(t.title) }
  const saveEdit = async () => { await dispatch(updateTask({ id: editingId, title })); setEditingId(null); setTitle('') }

  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
  const handleBulk = async () => { if (selected.length === 0) return; await dispatch(bulkDelete(selected)); setSelected([]) }

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <Head>
        <title>ToDo - Tasks</title>
      </Head>
      <h1 style={{ fontSize: 32, marginBottom: 24, color: '#333' }}>Tasks</h1>
      
      <p style={{ marginTop: 24 }}>
        <Link 
          href="/" 
          style={{
            color: '#0070f3',
            fontWeight: 'bold',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#005bb5'}
          onMouseOut={e => e.currentTarget.style.color = '#0070f3'}
        >
          <span>←</span> Back to Dashboard
        </Link>
      </p>

      {/* Add/Edit Section */}
      <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 16,
        alignItems: 'center'
      }}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Task title'
          style={{
            padding: '10px 12px',
            flex: 1,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        {editingId ?
          <button onClick={saveEdit} style={{
            padding: '10px 16px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#4caf50',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#45a049'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#4caf50'}>
            Save
          </button> :
          <button onClick={handleAdd} style={{
            padding: '10px 16px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#0070f3',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#005bb5'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#0070f3'}>
            Add
          </button>
        }
      </div>

      {/* Bulk Delete */}
      {selected.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <button onClick={handleBulk} style={{
            padding: '10px 16px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#e53935',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#d32f2f'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#e53935'}>
            Delete Selected ({selected.length})
          </button>
        </div>
      )}

      {/* Tasks List */}
      {loading ? <p>Loading...</p> : (
  <div style={{ display: 'grid', gap: 12 }}>
    {tasks
  .slice()
  .sort((a, b) => a.deleted - b.deleted)
  .map(t => (
    <div key={t.id} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      transition: 'transform 0.15s',
    }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
      
      {/* Left: Checkbox + ID + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input type='checkbox' checked={selected.includes(t.id)} onChange={() => toggle(t.id)}  disabled={t.deleted}/>
        <span style={{
          fontWeight: 'bold',
          color: '#555'
        }}>{t.id}</span>
        <span style={{
          textDecoration: t.deleted ? 'line-through' : 'none',
          color: t.deleted ? '#999' : '#333',
          fontSize: 16
        }}>{t.title}</span>
      </div>

      {/* Right: Edit & Delete buttons */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => startEdit(t)}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #0070f3',
            backgroundColor: t.deleted ? '#ccc' : '#fff',
            color: t.deleted ? '#666' : '#0070f3',
            cursor: t.deleted ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => {
            if (!t.deleted) {
              e.currentTarget.style.backgroundColor = '#0070f3';
              e.currentTarget.style.color = '#fff';
            }
          }}
          onMouseOut={e => {
            if (!t.deleted) {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#0070f3';
            }
          }}
          disabled={t.deleted}
        >
          Edit
        </button>

        <button
          onClick={() => !t.deleted && dispatch(deleteTask(t.id))}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: t.deleted ? '#ccc' : '#e53935',
            color: '#fff',
            cursor: t.deleted ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => {
            if (!t.deleted) e.currentTarget.style.backgroundColor = '#d32f2f';
          }}
          onMouseOut={e => {
            if (!t.deleted) e.currentTarget.style.backgroundColor = '#e53935';
          }}
          disabled={t.deleted}
        >
          Delete
        </button>
      </div>
    </div>
))}

  </div>
)}
    </div>
  )
}
