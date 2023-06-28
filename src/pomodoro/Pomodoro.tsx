import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Calender from '../components/calender/Calender';
import Tasks from '../components/tasks/Tasks';
import Countdown from '../components/countdown/Countdown';
import { useTasksContext } from '../context/context';

const Pomodoro: React.FC = (): React.ReactElement => {
  //  want to set it with time zone and in tasks we calculate the offfset using the ISO time
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString());
  const { state: userTasks, dispatch } = useTasksContext();
  useEffect(() => {
    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - 1);
    previousDate.setHours(23, 59, 59, 0);

    const cleanupExpiredTasks = userTasks.tasks.filter(
      (task) => new Date(task.isoString) > previousDate,
    );
    dispatch({ type: 'CLEANUP', payload: cleanupExpiredTasks });
  }, []);

  return (
    <>
      <Calender
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        tasks={userTasks.tasks}
      />
      <Layout>
        <Tasks selectedDay={selectedDay} />
        <Countdown minutes={40} />
      </Layout>
    </>
  );
};

export default Pomodoro;
