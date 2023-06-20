import React, { useState } from 'react';
import { Task } from '../../types/Task';
import classNames from 'classnames';
import Button from '../button/Button';
import { TimerIcon } from './timerIcon';
interface Props {
  task: Task;
  onClick: () => void;
}

const TaskItem: React.FC<Props> = ({ task, onClick }): React.ReactElement => {
  const {
    name,
    longBreakTime,
    shortBreakTime,
    color,
    sessionTime,
    sessionsPerRound,
    repeat,
  } = task;
  return (
    <div
      className={classNames(
        'flex flex-col items-start border-2 rounded h-42 p-3 m-4',
        {
          // [`bg-${color}`]: color,
          ' text-black': color,
        },
      )}
      onClick={onClick}
    >
      <div className="flex items-center my-1">
        <div className="w-1">{TimerIcon}</div>
        <h3 className="ml-6">{name}</h3>
      </div>
      {repeat && (
        <div className="flex gap-x-3 my-1">
          {repeat.map((day) => (
            <Button type="pill" key={day} text={day} />
          ))}
        </div>
      )}
      <hr className="border-gray-500 my-4 w-full" />
      <div className="flex row gap-x-3 justify-start w-full">
        Focus Session:
        <Button type="pill" text={`${sessionTime} mins`}></Button>
        Short Break:
        <Button type="pill" text={`${shortBreakTime} mins`}></Button>
        Long Break:
        <Button type="pill" text={`${longBreakTime} mins`}></Button>
        Session Per Round:
        <Button type="pill" text={`${sessionsPerRound}`}></Button>
      </div>
    </div>
  );
};
export default TaskItem;
