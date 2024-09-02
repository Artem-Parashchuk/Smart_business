
import { useDispatch } from 'react-redux'
import s from './App.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Table } from './components/Table/Table'
import { useEffect } from 'react'
import { fetchUsers } from './redux/thunks'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])
  return (
    <div className={s.wrapper}>
      <Header/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default App
