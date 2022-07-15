import React, { useState, useCallback } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export const Calendar = ({ onChange }) => {
  const [value, setValue] = useState(new Date());

  const handleChange = useCallback(dt => {
    setValue(dt)
    onChange(dt)
  }, [onChange])

  return (
    <>
      <ReactCalendar 
        className="rounded-xl" 
        onChange={onChange} 
        value={value} 
      />
    </>
  );
}