import React, { useState } from 'react';
import classNames from 'classnames';
const week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const Calender: React.FC = (): React.ReactElement => {
  const [selectedDay, setSelectedDay] = useState(0);
  const onClick = (index: number) => {
    setSelectedDay(index);
  };
  return (
    <section className=" bg-white">
      <div className="w-full flex justify-center">
        {week.map((day, index) => {
          const dateTime = new Date();
          const currentDay = dateTime.getDay() + index;
          const currentDate = new Date(
            dateTime.setDate(dateTime.getDate() + currentDay),
          );
          const date = currentDate.getDate();
          return (
            <div
              className={classNames(
                'flex text-center flex-col mx-2 p-2 hover:cursor-pointer',
                {
                  'rounded-lg border border-gray-500':
                    date === new Date().getDate(),
                  'bg-slate-600': selectedDay === index,
                },
              )}
              key={index}
              onClick={() => onClick(index)}
            >
              <span>{day}</span>
              <span>{date}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
