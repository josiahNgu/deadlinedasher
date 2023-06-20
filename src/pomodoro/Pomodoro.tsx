import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Calender from '../components/calender/Calender';
import Tasks from '../components/tasks/Tasks';
import Countdown from '../components/countdown/Countdown';
import { useTasksContext } from '../context/context';

const Pomodoro: React.FC = (): React.ReactElement => {
  //  want to set it with time zone and in tasks we calculate the offfset using the ISO time
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString());
  const { state: userTasks } = useTasksContext();

  //   const setUserCurrentDay = (date: Date) => {};
  // or we can set day to be ISO by converting it
  return (
    <Layout>
      <Calender
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        tasks={userTasks.tasks}
      />
      <Tasks selectedDay={selectedDay} />
      <Countdown minutes={40} />
    </Layout>
  );
};

export default Pomodoro;
