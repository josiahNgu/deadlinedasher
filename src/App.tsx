import React from 'react';
import Layout from './components/layout/Layout';
import Pomodoro from './pomodoro/Pomodoro';
import { TasksProvider } from './context/context';

function App() {
  return (
    <TasksProvider>
      <div className="bg-muji-white h-screen">
        <Pomodoro />
      </div>
    </TasksProvider>
  );
}

export default App;
