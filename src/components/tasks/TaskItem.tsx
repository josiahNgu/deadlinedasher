import React, { useState } from 'react';
import { Task } from '../../types/Task';
import classNames from 'classnames';
import Button from '../button/Button';
import { TimerIcon } from './timerIcon';
import { weekDaysAbbreviations } from '../../types/WeekDayAbbrv';
import Input from '../input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { numberInputValidation } from './formValidationUtils';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  task: Task;
  onClick: () => void;
  isEditing: boolean;
  onSubmit?: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  onClick,
  onSubmit,
  isEditing,
}): React.ReactElement => {
  const {
    name,
    longBreakTime,
    shortBreakTime,
    color,
    sessionTime,
    sessionsPerRound,
    repeat,
  } = task;
  const [success, setSuccess] = useState(false);
  const methods = useForm({
    defaultValues: {
      'Session Time:': 25,
      'Short Break:': 5,
      'Long Break:': 15,
      'Sessions Per Round:': 4,
      name: '',
    },
  });
  const onFormSubmit = methods.handleSubmit((data) => {
    console.log('formData----', data);
    // onSubmit(...data);
    onSubmit!({
      color: 'normal',
      completed: false,
      id: uuidv4(),
      isoString: new Date().toISOString(),
      name: data.name,
      sessionTime: data['Session Time:'],
      shortBreakTime: data['Short Break:'],
      longBreakTime: data['Long Break:'],
      sessionsPerRound: data['Session Time:'],
      repeat: [weekDaysAbbreviations[new Date().getDay()]],
      endRepeat: new Date(new Date().setHours(23, 59, 59)).toISOString(),
      remainingTime: 0,
    });
    methods.reset();
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div
          className={classNames(
            'bg-violet-300/10 flex flex-col items-start rounded h-42 p-3 m-4  text-slate-300 antialiased',
            // {
            //   // [`bg-${color}`]: color,
            //   ' text-sky-400 antialiased': color,
            // },
          )}
          onClick={onClick}
        >
          <div className="flex w-full items-center my-1">
            {isEditing ? (
              <div className="flex-1">
                <Input
                  type="text"
                  id="name"
                  placeholder="What are you working on?"
                  label="name"
                  name="name"
                  validation={{
                    required: {
                      value: true,
                      message: 'Get to work',
                    },
                  }}
                />
              </div>
            ) : (
              <>
                <div className="w-2">{TimerIcon}</div>
                <h3 className="ml-6">{name}</h3>
              </>
            )}
          </div>
          {!isEditing && repeat && (
            <div className="flex gap-x-3 my-1">
              {repeat.map((day) => (
                <Button
                  disabled
                  type="pill"
                  key={`editable-${day}`}
                  text={day}
                />
              ))}
            </div>
          )}
          {isEditing && repeat && (
            <div className="flex gap-x-3 my-1">
              {weekDaysAbbreviations.map((day) => (
                <Button type="pill" key={`${day}`} text={day} />
              ))}
            </div>
          )}
          <hr className="border-gray-500 my-4 w-full" />
          <div className="flex row gap-x-3 justify-start w-full">
            Focus Session:
            {!isEditing && (
              <Button type="pill" text={`${sessionTime} mins`}></Button>
            )}
            {isEditing && (
              <>
                <Input
                  type="number"
                  id="sessionTime"
                  label="Session Time:"
                  name={'sessionTime'}
                  placeholder="25"
                  validation={numberInputValidation({
                    name: 'sessionTime',
                    min: 1,
                    max: 45,
                    message: 'Please enter a number between 1 and 45',
                  })}
                />
                <Button type="pill" text="mins"></Button>
              </>
            )}
            {!isEditing && (
              <>
                <span> Short Break:</span>
                <Button
                  disabled
                  type="pill"
                  text={`${shortBreakTime} mins`}
                ></Button>
              </>
            )}
            {isEditing && (
              <>
                <Input
                  label="Short Break:"
                  placeholder="5"
                  type="number"
                  id="shortBreakTime"
                  name="shortBreakTime"
                  validation={numberInputValidation({
                    max: 10,
                    min: 1,
                    name: 'shortBreakTime',
                    message: 'Please enter a number between 1 and 10',
                  })}
                />
                <Button disabled type="pill" text="mins"></Button>
              </>
            )}
            {!isEditing && (
              <>
                <p> Long Break:</p>
                <Button
                  disabled
                  type="pill"
                  text={`${longBreakTime} mins`}
                ></Button>
              </>
            )}
            {isEditing && (
              <>
                <Input
                  placeholder="15"
                  type="number"
                  min={1}
                  max={30}
                  id="longBreakTime"
                  label="Long Break:"
                  name={'longBreakTime'}
                  validation={numberInputValidation({
                    max: 30,
                    min: 1,
                    name: 'longBreakTime',
                    message: 'Please enter a number between 1 and 30',
                  })}
                />
                <Button disabled type="pill" text="mins"></Button>
              </>
            )}
            {!isEditing && (
              <>
                <p>Session Per Round:</p>
                <Button
                  disabled
                  type="pill"
                  text={`${sessionsPerRound}`}
                ></Button>
              </>
            )}
            {isEditing && (
              <>
                <Input
                  placeholder="4"
                  type="number"
                  min={1}
                  max={10}
                  id="sessionsPerRound"
                  validation={numberInputValidation({
                    max: 10,
                    min: 1,
                    name: 'sessionPerRound',
                    message: 'Please enter a number between 1 and 10',
                  })}
                  label={'Sessions Per Round:'}
                  name={'sessionPerRound'}
                />
                <Button disabled type="pill" text="rounds"></Button>
              </>
            )}
          </div>
          <button onClick={onFormSubmit} className="bg-white">
            Save
          </button>
        </div>
        <p>{success && 'Task added successfully!'}</p>
      </form>
    </FormProvider>
  );
};
export default TaskItem;
