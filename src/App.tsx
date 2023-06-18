import React from 'react'
import './App.css'
import { Layout } from './components/layout/Layout'
import { Calender } from './components/calender/Calender'

function App() {
  return (
    <div className=" bg-white dark:bg-slate-900 h-screen">
      <Layout>
        <h1 className="text-white">
          Boost Your Productivity with our Pomodoro Timer
        </h1>
        <Calender />
      </Layout>
    </div>
  )
}

export default App
