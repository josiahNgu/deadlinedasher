import React from 'react';
import Layout from './components/layout/Layout';
import Pomodoro from './pomodoro/Pomodoro';
import { TasksProvider } from './context/context';

function App() {
  return (
    <TasksProvider>
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-screen">
        <Pomodoro />
      </div>
    </TasksProvider>
  );
}

export default App;
