import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/tasksSlice'

export default function Home() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.list)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const total = tasks.filter(t => t.deleted === false).length
  const modified = tasks.filter(t => t.updated === true && t.deleted === false).length
  const deleted = tasks.filter(t => t.deleted === true).length

  const cardStyle = (color) => ({
    padding: 24,
    borderRadius: 10,
    backgroundColor: color,
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    flex: 1,
    transition: 'transform 0.2s',
  })

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <Head>
        <title>ToDo - Dashboard</title>
      </Head>

      <h1 style={{ fontSize: 32, marginBottom: 24, color: '#333' }}>Dashboard</h1>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={cardStyle('#0070f3')} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
          <h3 style={{ marginBottom: 12, fontSize: 18 }}>Total Tasks</h3>
          <p style={{ fontSize: 28, margin: 0, fontWeight: 'bold' }}>{total}</p>
        </div>

        <div style={cardStyle('#8b8330ff')} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
          <h3 style={{ marginBottom: 12, fontSize: 18 }}>Modified Tasks</h3>
          <p style={{ fontSize: 28, margin: 0, fontWeight: 'bold' }}>{modified}</p>
        </div>

        <div style={cardStyle('#e53935')} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
          <h3 style={{ marginBottom: 12, fontSize: 18 }}>Deleted Tasks</h3>
          <p style={{ fontSize: 28, margin: 0, fontWeight: 'bold' }}>{deleted}</p>
        </div>
      </div>



      <p style={{ marginTop: 24 }}>
  <Link 
    href="/tasks" 
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
    <span>→</span> Go to Tasks
  </Link>
</p>

    </div>
  )
}
