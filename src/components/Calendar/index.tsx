import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Circle } from '@mui/icons-material';
import moment from 'moment';
import styles from './Calendar.module.scss';

const Calendar: React.FC = () => {
  const [dateObject, setDateObject] = useState(moment());

  const firstDayOfMonth = Number(dateObject.startOf("month").format("d"));
  const currentMonth = dateObject.format('MMMM');
  const currentYear = dateObject.format('YYYY')
  const weekDays = moment.weekdaysShort();

  const weekDayNamesList = weekDays.map(weekDay => {
    return <th key={weekDay} className={styles["week-day"]}>{weekDay}</th>;
  });

  const getBlankDaysList = () => {
    let blankDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blankDays.push(
        <td className={styles["calendar-day"]} key={`blank-${i}`}>{""}</td>
      );
    }
    return blankDays;
  };

  const getDaysList = () => {
    let daysInMonth = [];
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={`day-${d}`} className={styles["calendar-day"]}>{d}</td>
      );
    }
    return daysInMonth;
  };

  const renderDaysInMonth = () => {
    const totalSlots = [...getBlankDaysList(), ...getDaysList()];
    const rows = [] as React.ReactElement[][];
    let rowCount = 0;

    for (let i = 0; i < totalSlots.length; i++) {
      // checks for every 7 items in the totalSlots list.
      if (i % 7 == 0) {
        // extracts every 7 items and places them in a new array.
        const row = totalSlots.slice(rowCount, i + 7)
        rows.push(row);
        // increments the rowCount to get the next 7 items.
        rowCount += 7;
      }
    }

    const daysInMonth = rows.map((row, index) => {
      return <tr key={`row-${index}`}>{row}</tr>;
    });

    return daysInMonth;
  };

  return (
    <div className={styles['container']}>
      <h1 className={styles['year-title']}>{currentYear}</h1>
      <h3 className={styles['month-title']}>{currentMonth}</h3>

      <div className={styles['month-navigation-buttons']}>
        <Button className={styles['navigation-button']} variant="ghost">
          <ArrowBackIos color="white" className={styles['navigation-icon']} />
        </Button>
        <Circle className={styles['navigation-separator']} />
        <Button className={styles['navigation-button']} variant="ghost">
          <ArrowForwardIos color="white" className={styles['navigation-icon']} />
        </Button>
      </div>

      <table className={styles['calendar-table']}>
        <thead>
          <tr>{weekDayNamesList}</tr>
        </thead>

        <tbody>{renderDaysInMonth()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;