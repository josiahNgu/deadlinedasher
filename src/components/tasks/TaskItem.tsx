import React, { useState } from 'react';
import { Task } from '../../types/Task';

const TaskItem: React.FC<
  Pick<Task, 'name' | 'longBreakTime' | 'shortBreakTime'>
> = ({ name, longBreakTime, shortBreakTime }): React.ReactElement => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};
export default TaskItem;
