import React, { createContext, useContext, useReducer } from 'react';
import { Task } from '../types/Task';

interface State {
  tasks: Task[];
}

interface Action {
  type: 'CREATE' | 'UPDATE' | 'DELETE' | 'CLEANUP';
  payload: Task | Task[];
}
const USER_TASKS = 'USER_TASKS_LIST';

const initialState: State = {
  tasks: JSON.parse(localStorage.getItem(USER_TASKS) || '[]') || [],
};

const setTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(USER_TASKS, JSON.stringify(tasks));
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CREATE':
      console.log('action', action);
      setTasksToLocalStorage([...state.tasks, action.payload as Task]);
      return { ...state, tasks: [...state.tasks, action.payload as Task] };
    case 'UPDATE':
      // eslint-disable-next-line no-case-declarations
      const updatedTasks = state.tasks.map((task) =>
        task.id === (action.payload as Task).id
          ? { ...task, ...action.payload }
          : task,
      );
      setTasksToLocalStorage(updatedTasks);
      return { ...state, tasks: updatedTasks };
    case 'DELETE':
      // eslint-disable-next-line no-case-declarations
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== (action.payload as Task).id,
      );
      setTasksToLocalStorage(filteredTasks);
      return {
        ...state,
        tasks: filteredTasks,
      };
    case 'CLEANUP':
      setTasksToLocalStorage([...(action.payload as Task[])]);
      return { ...state };
    default:
      return state;
  }
};

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const TasksContext = createContext<ContextProps | undefined>(undefined);
// Custom hook for accessing the context
const useTasksContext = (): ContextProps => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasksContext must be used within a TasksProvider');
  }
  return context;
};
// Provider component
interface ProviderProps {
  children: React.ReactNode;
}

const TasksProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export { useTasksContext, TasksProvider };
