import React from 'react';
import classNames from 'classnames';
import { weekDaysAbbreviations } from '../../types/WeekDayAbbrv';
import { Task } from '../../types/Task';

interface Props {
  setSelectedDay: (date: string) => void;
  selectedDay: string;
  tasks: Task[];
}
const Calender: React.FC<Props> = ({
  setSelectedDay,
  selectedDay,
  tasks,
}): React.ReactElement => {
  return (
    <section className="text-white antialiased bg-khaki">
      <div className="w-full flex justify-center text-sm">
        {weekDaysAbbreviations.map((day, index) => {
          const dateTime = new Date();
          const currentDay = index - dateTime.getDay();
          const currentDate = new Date(
            dateTime.setDate(dateTime.getDate() + currentDay),
          );
          const date = currentDate.getDate();
          const selectedDateString = selectedDay.split('T')[0];
          const currentDateString = currentDate.toISOString().split('T')[0];
          const hasTask = tasks.find(
            (task) =>
              new Date(task.endRepeat).toISOString().split('T')[0] ===
              currentDateString,
          );
          return (
            <div key={index} className="flex text-center flex-col mx-2 p-2">
              <span className="mb-1">{day}</span>
              <span
                className={classNames('mt-1 p-2 hover:cursor-pointer', {
                  'rounded-full border border-muji-white':
                    currentDateString ===
                    new Date().toISOString().split('T')[0],
                  'bg-muji-white rounded-full text-khaki':
                    selectedDateString === currentDateString,
                })}
                onClick={() => setSelectedDay(currentDate.toISOString())}
              >
                {date}
              </span>
              {hasTask && (
                <div className="flex justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="10"
                    height="10"
                  >
                    <circle cx="5" cy="5" r="2" fill="white" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Calender;
