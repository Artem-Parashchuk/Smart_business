import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'
import { fetchUsers } from './redux/thunks'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Table } from './components/Table/Table'

import s from './App.module.css'

function App() {
  const dispatch = useDispatch<AppDispatch>()

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
