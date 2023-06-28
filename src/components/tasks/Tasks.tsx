import React, { useState } from 'react';
import { useTasksContext } from '../../context/context';
import { Task } from '../../types/Task';
import Button from '../button/Button';
import TaskItem from './TaskItem';
import { v4 as uuidv4 } from 'uuid';
import { weekDaysAbbreviations } from '../../types/WeekDayAbbrv';

interface Props {
  selectedDay: string;
}

const CreateTaskMessage: React.FC = (): React.ReactElement => {
  const [isAddTask, setIsAddTask] = useState(false);
  const initialValue: Task = {
    id: uuidv4(),
    isoString: new Date().toISOString(),
    name: '',
    sessionTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
    sessionsPerRound: 0,
    color: '',
    repeat: [],
    endRepeat: '',
    completed: false,
    remainingTime: 0,
  };
  const { dispatch } = useTasksContext();
  const addNewTask = (task: Task): void => {
    dispatch({ type: 'CREATE', payload: task });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* <Text content="Create a new task" /> */}
        <Button
          text="Create New Task"
          onClick={() => setIsAddTask((prevState) => !prevState)}
        />
        {isAddTask && (
          <TaskItem
            onSubmit={(task: Task) => {
              addNewTask(task);
              setIsAddTask(false);
            }}
            onClick={() => undefined}
            task={initialValue}
            isEditing
          />
        )}
      </div>
    </>
  );
};

const Tasks: React.FC<Props> = ({ selectedDay }): React.ReactElement => {
  const { state: userTasks } = useTasksContext();
  const selectedDayTasks = userTasks.tasks.filter((task) => {
    const ISODate = new Date(task.isoString);
    const taskDateString = ISODate.toISOString().split('T')[0];
    const hasDay = task.repeat.find((day) => {
      day === weekDaysAbbreviations[new Date().getDay()];
    });
    const isValidRepeat = hasDay && new Date(task.isoString) > new Date();
    return taskDateString === selectedDay.split('T')[0] || isValidRepeat;
  });

  return (
    <>
      {selectedDayTasks.length &&
        selectedDayTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={false}
            onClick={() => console.log(task.id)}
          />
        ))}
      {selectedDay && <CreateTaskMessage />}
    </>
  );
};

export default Tasks;
