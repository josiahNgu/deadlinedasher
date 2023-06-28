import React from 'react';
import Pomodoro from './pomodoro/Pomodoro';
import { TasksProvider } from './context/context';

function App() {
  return (
    <TasksProvider>
      <div className="bg-prose h-screen">
        <Pomodoro />
      </div>
    </TasksProvider>
  );
}

export default App;
