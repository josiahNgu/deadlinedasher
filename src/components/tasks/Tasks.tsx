import React, { useState } from 'react';
import { useTasksContext } from '../../context/context';
import { Task } from '../../types/Task';
import Text from '../text/Text';
import Button from '../button/Button';
import TaskItem from './TaskItem';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  selectedDay: string;
}

const EmptyTaskMessage: React.FC<{ CTA: () => void }> = ({
  CTA,
}): React.ReactElement => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Text content="Create a new task and get focused" />
        <Button text="New Task" onClick={CTA} />
      </div>
    </>
  );
};

const Tasks: React.FC<Props> = ({ selectedDay }): React.ReactElement => {
  const { state: userTasks, dispatch } = useTasksContext();
  const selectedDayTasks = userTasks.tasks.filter((task) => {
    console.log('task', task);
    const ISODate = new Date(task.isoString);
    const taskDateString = ISODate.toISOString().split('T')[0];
    return taskDateString === selectedDay.split('T')[0];
  });
  const addNewTask = (): void => {
    const fakeTask: Task = {
      color: 'green',
      id: uuidv4(),
      isoString: new Date().toISOString(),
      name: 'LeetCode',
      sessionTime: 0,
      shortBreakTime: 0,
      longBreakTime: 0,
      sessionsPerRound: 0,
      repeat: ['M', 'T'],
      endRepeat: new Date().toISOString(),
      completed: false,
      remainingTime: 100,
    };
    dispatch({ type: 'CREATE', payload: fakeTask });
  };

  return (
    <>
      {selectedDayTasks.length ? (
        selectedDayTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onClick={() => console.log(task.id)}
          />
        ))
      ) : (
        <EmptyTaskMessage CTA={addNewTask} />
      )}
    </>
  );
};

export default Tasks;
